import { isSupabaseConfigured, supabase } from './supabase';

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
  const error = document.querySelector<HTMLElement>(options.errorSelector);

  if (!form || !success || !error) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    error.hidden = true;
    error.textContent = '';

    if (!supabase || !isSupabaseConfigured) {
      error.textContent = 'Supabase is not configured yet. Add PUBLIC_SUPABASE_URL and PUBLIC_SUPABASE_ANON_KEY.';
      error.hidden = false;
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
      error.textContent = 'Please complete name, email and organization.';
      error.hidden = false;
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = previousLabel;
      }
      return;
    }

    const { error: insertError } = await supabase.from('beta_requests').insert(payload);

    if (insertError) {
      error.textContent = insertError.message || 'The request could not be saved. Please try again.';
      error.hidden = false;
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
