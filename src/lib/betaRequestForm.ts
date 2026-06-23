import { insertSupabaseRow, isSupabaseConfigured } from './supabase';

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
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = submitButton.dataset.loadingLabel || 'Sending...';
    }

    const formData = new FormData(form);
    const accountType = getAccountType(formData);
    const requestedPlatforms = formData
      .getAll('platforms')
      .filter((value): value is string => typeof value === 'string' && value.length > 0);

    const requestedSeatsRaw = Number(getString(formData, 'requested_seats'));
    const requestedSeats = accountType === 'organization' && Number.isFinite(requestedSeatsRaw) && requestedSeatsRaw > 0 ? requestedSeatsRaw : 1;

    const payload = {
      account_type: accountType,
      full_name: getString(formData, 'full_name'),
      email: getString(formData, 'email'),
      organization_name: accountType === 'organization' ? getString(formData, 'organization_name') : '',
      role: getString(formData, 'role'),
      country: getString(formData, 'country'),
      expected_use: getString(formData, 'expected_use'),
      requested_platforms: requestedPlatforms.length ? requestedPlatforms : ['macos', 'windows', 'linux'],
      requested_seats: requestedSeats,
      message: getString(formData, 'message'),
    };

    if (!payload.full_name || !payload.email || (accountType === 'organization' && !payload.organization_name)) {
      errorBox.textContent = accountType === 'organization'
        ? 'Please complete name, email and organization.'
        : 'Please complete name and email.';
      errorBox.hidden = false;
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = previousLabel;
      }
      return;
    }

    try {
      await insertSupabaseRow('beta' + '_requests', payload);
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
