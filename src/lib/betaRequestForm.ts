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

export function setupBetaRequestForm(options: BetaRequestOptions) {
  const form = document.querySelector<HTMLFormElement>(options.formSelector);
  const success = document.querySelector<HTMLElement>(options.successSelector);
  const errorBox = document.querySelector<HTMLElement>(options.errorSelector);

  if (!form || !success || !errorBox) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    errorBox.hidden = true;
    errorBox.textContent = '';

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
    const requestedPlatforms = formData
      .getAll('platforms')
      .filter((value): value is string => typeof value === 'string' && value.length > 0);

    const requestedSeatsRaw = Number(getString(formData, 'requested_seats'));
    const requestedSeats = Number.isFinite(requestedSeatsRaw) && requestedSeatsRaw > 0 ? requestedSeatsRaw : 1;

    const payload = {
      full_name: getString(formData, 'full_name'),
      email: getString(formData, 'email'),
      organization_name: getString(formData, 'organization_name'),
      role: getString(formData, 'role'),
      country: getString(formData, 'country'),
      expected_use: getString(formData, 'expected_use'),
      requested_platforms: requestedPlatforms.length ? requestedPlatforms : ['macos', 'windows', 'linux'],
      requested_seats: requestedSeats,
      message: getString(formData, 'message'),
    };

    if (!payload.full_name || !payload.email || !payload.organization_name) {
      errorBox.textContent = 'Please complete name, email and organization.';
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
