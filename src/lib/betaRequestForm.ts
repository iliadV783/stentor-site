import { insertSupabaseRow, isSupabaseConfigured } from './supabase';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;

type BetaRequestOptions = {
  formSelector: string;
  successSelector: string;
  errorSelector: string;
};

function getString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === 'string' ? value.trim() : '';
}

function getAccountType(formData: FormData) {
  const value = getString(formData, 'account_type');
  return value === 'organization' ? 'organization' : 'individual';
}

function getFullName(formData: FormData) {
  const firstName = getString(formData, 'first_name');
  const lastName = getString(formData, 'last_name');
  const fullName = [firstName, lastName].filter(Boolean).join(' ').trim();
  return fullName || getString(formData, 'full_name');
}

async function sendBetaRequestEmail(payload: Record<string, unknown>) {
  if (!supabaseUrl) return;

  const response = await fetch(`${supabaseUrl}/functions/v1/beta-request-email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    let message = 'Beta request saved, but confirmation email failed.';
    try {
      const body = await response.json();
      message = body.message || body.error || message;
    } catch {
      message = response.statusText || message;
    }
    throw new Error(message);
  }
}

function replaceNeutralFooterCopy() {
  const replacements = new Map([
    ['No card required', 'Manual review'],
    ['Nessuna carta richiesta', 'Revisione manuale'],
    ['Aucune carte requise', 'Examen manuel'],
  ]);

  document.querySelectorAll('li').forEach((item) => {
    const current = item.textContent?.replace('✓', '').trim() || '';
    const replacement = replacements.get(current);
    if (!replacement) return;
    const marker = item.querySelector('span');
    item.innerHTML = '';
    if (marker) item.appendChild(marker);
    item.append(` ${replacement}`);
  });
}

function updateOrganizationFields(form: HTMLFormElement) {
  const formData = new FormData(form);
  const accountType = getAccountType(formData);
  const organizationFields = form.querySelectorAll<HTMLElement>('[data-organization-only]');
  const organizationInput = form.querySelector<HTMLInputElement>('[name="organization_name"]');
  const seatsInput = form.querySelector<HTMLInputElement>('[name="requested_seats"]');

  form.dataset.accountType = accountType;

  organizationFields.forEach((field) => {
    const hidden = accountType !== 'organization';
    field.hidden = hidden;
    field.style.display = hidden ? 'none' : '';
    field.setAttribute('aria-hidden', hidden ? 'true' : 'false');
  });

  if (organizationInput) {
    organizationInput.required = accountType === 'organization';
    organizationInput.disabled = accountType !== 'organization';
    if (accountType !== 'organization') organizationInput.value = '';
  }

  if (seatsInput) {
    seatsInput.required = accountType === 'organization';
    seatsInput.disabled = accountType !== 'organization';
    if (accountType === 'individual') seatsInput.value = '1';
  }
}

function validationMessage(form: HTMLFormElement, formData: FormData) {
  const accountType = getAccountType(formData);
  const fullName = getFullName(formData);
  const email = getString(formData, 'email');
  const country = getString(formData, 'country');
  const organizationName = getString(formData, 'organization_name');
  const requestedPlatforms = formData
    .getAll('platforms')
    .filter((value): value is string => typeof value === 'string' && value.length > 0);
  const termsAccepted = Boolean(form.querySelector<HTMLInputElement>('input[type="checkbox"][required]')?.checked);

  if (!fullName || !email || !country) return 'Please complete first name, last name, e-mail and country.';
  if (accountType === 'organization' && !organizationName) return 'Please complete organization name.';
  if (accountType === 'organization') {
    const requestedSeatsRaw = Number(getString(formData, 'requested_seats'));
    if (!Number.isFinite(requestedSeatsRaw) || requestedSeatsRaw < 1) return 'Please enter the expected number of users.';
  }
  if (!requestedPlatforms.length) return 'Please select at least one platform.';
  if (!termsAccepted) return 'Please accept the Terms and Privacy Policy.';
  return '';
}

export function setupBetaRequestForm(options: BetaRequestOptions) {
  const form = document.querySelector<HTMLFormElement>(options.formSelector);
  const success = document.querySelector<HTMLElement>(options.successSelector);
  const errorBox = document.querySelector<HTMLElement>(options.errorSelector);

  replaceNeutralFooterCopy();

  if (!form || !success || !errorBox) return;

  updateOrganizationFields(form);
  form.querySelectorAll<HTMLInputElement>('[name="account_type"]').forEach((input) => {
    input.addEventListener('change', () => updateOrganizationFields(form));
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    errorBox.hidden = true;
    errorBox.textContent = '';
    updateOrganizationFields(form);

    if (!isSupabaseConfigured) {
      errorBox.textContent = 'Missing public site configuration.';
      errorBox.hidden = false;
      return;
    }

    const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    const previousLabel = submitButton?.textContent ?? '';
    const formData = new FormData(form);
    const errorMessage = validationMessage(form, formData);
    if (errorMessage) {
      errorBox.textContent = errorMessage;
      errorBox.hidden = false;
      return;
    }

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = submitButton.dataset.loadingLabel || 'Sending...';
    }

    const accountType = getAccountType(formData);
    const firstName = getString(formData, 'first_name');
    const lastName = getString(formData, 'last_name');
    const fullName = getFullName(formData);
    const requestedPlatforms = formData
      .getAll('platforms')
      .filter((value): value is string => typeof value === 'string' && value.length > 0);

    const requestedSeatsRaw = Number(getString(formData, 'requested_seats'));
    const requestedSeats = accountType === 'organization' && Number.isFinite(requestedSeatsRaw) && requestedSeatsRaw > 0 ? requestedSeatsRaw : 1;

    const payload = {
      account_type: accountType,
      first_name: firstName,
      last_name: lastName,
      full_name: fullName,
      email: getString(formData, 'email'),
      organization_name: accountType === 'organization' ? getString(formData, 'organization_name') : '',
      role: getString(formData, 'role'),
      country: getString(formData, 'country'),
      expected_use: getString(formData, 'expected_use'),
      requested_platforms: requestedPlatforms,
      requested_seats: requestedSeats,
      message: getString(formData, 'message'),
    };

    try {
      await insertSupabaseRow('beta' + '_requests', payload);
      try {
        await sendBetaRequestEmail(payload);
      } catch (emailError) {
        console.error(emailError);
      }
    } catch (err) {
      errorBox.textContent = err instanceof Error ? err.message : 'The request could not be saved. Please try again.';
      errorBox.hidden = false;
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = previousLabel;
      }
      return;
    }

    form.hidden = true;
    success.hidden = false;
  });
}
