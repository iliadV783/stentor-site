type AdminRequest = {
  id: string;
  full_name: string | null;
  email: string;
  organization_name: string | null;
  role: string | null;
  country: string | null;
  requested_platforms: string[] | null;
  requested_seats: number | null;
  message: string | null;
  status: 'pending' | 'approved' | 'rejected' | 'archived';
  created_at: string;
};

type AdminLicense = {
  id: string;
  license_key: string;
  beta_request_id: string | null;
  plan: string;
  status: 'active' | 'expired' | 'revoked';
  max_activations: number;
  enabled_platforms: string[] | null;
  expires_at: string | null;
  created_at: string;
};

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;
const storageKey = 'stentor_admin_access_token';
const approveButtonClass = 'h-9 px-3 rounded-lg border border-green-400/25 bg-green-400/10 text-green-100 hover:bg-green-400/20 hover:border-green-400/45 cursor-pointer text-sm font-medium transition-colors disabled:opacity-45 disabled:cursor-wait';
const rejectButtonClass = 'h-9 px-3 rounded-lg border border-stentor/25 bg-stentor/10 text-stentor hover:bg-stentor-dark/20 hover:border-stentor/45 cursor-pointer text-sm font-medium transition-colors disabled:opacity-45 disabled:cursor-wait';
const licenseButtonClass = 'h-9 px-3 rounded-lg border border-stentor/30 bg-stentor/15 text-stentor hover:bg-stentor/25 hover:border-stentor/50 cursor-pointer text-sm font-semibold transition-colors disabled:opacity-45 disabled:cursor-wait';
const mutedButtonClass = 'h-9 px-3 rounded-lg border border-white/10 bg-white/[0.04] text-white/35 text-sm cursor-default';
const copyButtonClass = 'h-8 px-3 rounded-lg border border-white/10 bg-white/[0.04] text-white/50 hover:text-white hover:bg-white/[0.08] cursor-pointer text-xs transition-colors';
const leftCellStyle = 'padding: 18px 24px; text-align: left; vertical-align: middle;';
const centerCellStyle = 'padding: 18px 24px; text-align: center; vertical-align: middle;';

function qs<T extends HTMLElement>(selector: string) {
  return document.querySelector<T>(selector);
}

function getTokenFromHash() {
  const hash = new URLSearchParams(window.location.hash.replace(/^#/, ''));
  const token = hash.get('access_token');
  if (token) {
    localStorage.setItem(storageKey, token);
    history.replaceState(null, '', window.location.pathname);
  }
  return token;
}

function getStoredToken() {
  return getTokenFromHash() || localStorage.getItem(storageKey) || '';
}

async function readError(response: Response, fallback: string) {
  try {
    const body = await response.json();
    return body.msg || body.message || body.error_description || body.error || fallback;
  } catch {
    return fallback;
  }
}

async function apiFetch(path: string, token: string, options: RequestInit = {}) {
  const response = await fetch(`${supabaseUrl}${path}`, {
    ...options,
    headers: {
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });

  if (!response.ok) {
    throw new Error(await readError(response, response.statusText || 'Request failed'));
  }

  if (response.status === 204) return null;
  return response.json();
}

function statusClass(status: AdminRequest['status'] | AdminLicense['status']) {
  if (status === 'approved' || status === 'active') return 'status-approved';
  if (status === 'rejected' || status === 'revoked') return 'status-rejected';
  return 'status-pending';
}

function renderAction(request: AdminRequest, licenses: AdminLicense[]) {
  const hasLicense = licenses.some((license) => license.beta_request_id === request.id);

  if (hasLicense) {
    return `<button type="button" class="${mutedButtonClass}" disabled>License created</button>`;
  }

  if (request.status === 'approved') {
    return `<button type="button" class="${licenseButtonClass}" data-create-license="${request.id}">Create license</button>`;
  }

  return `<div class="flex justify-center gap-2"><button type="button" class="${approveButtonClass}" data-approve="${request.id}">Approve</button><button type="button" class="${rejectButtonClass}" data-reject="${request.id}">Reject</button></div>`;
}

function renderRequests(requests: AdminRequest[], licenses: AdminLicense[]) {
  const tbody = qs<HTMLTableSectionElement>('[data-admin-requests]');
  if (!tbody) return;

  if (!requests.length) {
    tbody.innerHTML = `<tr><td style="${leftCellStyle}" colspan="7" class="text-white/45">No beta requests yet.</td></tr>`;
    return;
  }

  tbody.innerHTML = requests.map((request) => {
    const platforms = (request.requested_platforms || []).map((platform) => `<span class="admin-platform">${platform}</span>`).join('');
    return `<tr>
      <td style="${leftCellStyle}" class="text-white/85"><strong style="display:block;line-height:1.1;">${request.full_name || '—'}</strong><div class="text-white/35 text-xs mt-1">${new Date(request.created_at).toLocaleDateString()}</div></td>
      <td style="${leftCellStyle}" class="text-white/55">${request.email}</td>
      <td style="${leftCellStyle}" class="text-white/55">${request.organization_name || '—'}<div class="text-white/30 text-xs mt-1">${request.role || ''}</div></td>
      <td style="${centerCellStyle}">${platforms || '<span class="text-white/30">—</span>'}</td>
      <td style="${centerCellStyle}" class="text-white/55">${request.requested_seats || 1}</td>
      <td style="${centerCellStyle}"><span class="${statusClass(request.status)}">${request.status}</span></td>
      <td style="${centerCellStyle}">${renderAction(request, licenses)}</td>
    </tr>`;
  }).join('');
}

function renderLicenses(licenses: AdminLicense[], requests: AdminRequest[]) {
  const target = qs<HTMLElement>('[data-admin-licenses]');
  if (!target) return;

  if (!licenses.length) {
    target.innerHTML = '<p class="text-white/45">No licenses created yet.</p>';
    return;
  }

  target.innerHTML = licenses.map((license) => {
    const request = requests.find((item) => item.id === license.beta_request_id);
    const platforms = (license.enabled_platforms || []).join(', ') || '—';
    const expires = license.expires_at ? new Date(license.expires_at).toLocaleDateString() : 'No expiration';
    return `<div class="license-card">
      <div class="flex items-start justify-between gap-3 mb-4">
        <div><span class="license-label">License key</span><div class="license-key">${license.license_key}</div></div>
        <button type="button" class="${copyButtonClass}" data-copy-license="${license.license_key}">Copy</button>
      </div>
      <div class="grid sm:grid-cols-2 gap-3 text-sm">
        <div><span class="license-label">Owner</span><div class="text-white/65">${request?.email || '—'}</div></div>
        <div><span class="license-label">Organization</span><div class="text-white/65">${request?.organization_name || '—'}</div></div>
        <div><span class="license-label">Status</span><span class="${statusClass(license.status)}">${license.status}</span></div>
        <div><span class="license-label">Plan</span><div class="text-white/65">${license.plan}</div></div>
        <div><span class="license-label">Platforms</span><div class="text-white/65">${platforms}</div></div>
        <div><span class="license-label">Activations</span><div class="text-white/65">${license.max_activations}</div></div>
        <div class="sm:col-span-2"><span class="license-label">Expires</span><div class="text-white/65">${expires}</div></div>
      </div>
    </div>`;
  }).join('');
}

function renderStats(requests: AdminRequest[], licenses: AdminLicense[]) {
  const pending = requests.filter((item) => item.status === 'pending').length;
  const approved = requests.filter((item) => item.status === 'approved').length;
  qs<HTMLElement>('[data-stat-pending]')!.textContent = String(pending);
  qs<HTMLElement>('[data-stat-approved]')!.textContent = String(approved);
  qs<HTMLElement>('[data-stat-licenses]')!.textContent = String(licenses.length);
}

async function loadLicenses(token: string) {
  return apiFetch('/rest/v1/licenses?select=id,license_key,beta_request_id,plan,status,max_activations,enabled_platforms,expires_at,created_at&order=created_at.desc', token) as Promise<AdminLicense[]>;
}

async function loadRequests(token: string) {
  const requests = await apiFetch('/rest/v1/beta_requests?select=id,full_name,email,organization_name,role,country,requested_platforms,requested_seats,message,status,created_at&order=created_at.desc', token) as AdminRequest[];
  const licenses = await loadLicenses(token);
  renderRequests(requests, licenses);
  renderLicenses(licenses, requests);
  renderStats(requests, licenses);
}

async function updateRequestStatus(token: string, id: string, status: string) {
  await apiFetch(`/rest/v1/beta_requests?id=eq.${id}`, token, {
    method: 'PATCH',
    headers: { Prefer: 'return=minimal' },
    body: JSON.stringify({ status }),
  });
  await loadRequests(token);
}

async function createLicense(token: string, requestId: string) {
  await apiFetch('/rest/v1/rpc/create_beta_license', token, {
    method: 'POST',
    body: JSON.stringify({ request_id: requestId }),
  });
  await loadRequests(token);
}

async function ensureAdmin(token: string) {
  const profiles = await apiFetch('/rest/v1/profiles?select=id,email,is_admin&limit=1', token) as Array<{ email: string; is_admin: boolean }>;
  const profile = profiles[0];
  if (!profile?.is_admin) {
    throw new Error('Signed in, but this user is not marked as admin in profiles.');
  }
  qs<HTMLElement>('[data-admin-email]')!.textContent = profile.email;
}

async function sendMagicLink(email: string) {
  const redirectTo = `${window.location.origin}/auth/confirm?next=/admin`;
  const url = `${supabaseUrl}/auth/v1/otp?redirect_to=${encodeURIComponent(redirectTo)}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      apikey: supabaseAnonKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      create_user: true,
    }),
  });

  if (!response.ok) {
    throw new Error(await readError(response, 'Magic link could not be sent.'));
  }
}

async function signInWithPassword(email: string, password: string) {
  const response = await fetch(`${supabaseUrl}/auth/v1/token?grant_type=password`, {
    method: 'POST',
    headers: {
      apikey: supabaseAnonKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error(await readError(response, 'Login failed.'));
  }

  const body = await response.json();
  if (!body.access_token) throw new Error('Login succeeded but no access token was returned.');
  localStorage.setItem(storageKey, body.access_token);
  return body.access_token as string;
}

function showActionMessage(message: string) {
  const target = qs<HTMLElement>('[data-stat-licenses]');
  if (target) target.title = message;
}

export function setupAdminConsole() {
  const loginPanel = qs<HTMLElement>('[data-admin-login]');
  const appPanel = qs<HTMLElement>('[data-admin-app]');
  const errorBox = qs<HTMLElement>('[data-admin-error]');
  const loginForm = qs<HTMLFormElement>('[data-admin-login-form]');
  const magicButton = qs<HTMLButtonElement>('[data-admin-magic-link]');
  const logoutButton = qs<HTMLButtonElement>('[data-admin-logout]');
  const token = getStoredToken();

  if (!supabaseUrl || !supabaseAnonKey || !loginPanel || !appPanel || !errorBox || !loginForm) return;

  const showError = (message: string) => {
    errorBox.textContent = message;
    errorBox.hidden = false;
  };

  const showApp = async (activeToken: string) => {
    await ensureAdmin(activeToken);
    await loadRequests(activeToken);
    loginPanel.hidden = true;
    appPanel.hidden = false;
  };

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    errorBox.hidden = true;
    const formData = new FormData(loginForm);
    const email = String(formData.get('email') || '').trim();
    const password = String(formData.get('password') || '');
    if (!email) return showError('Enter your email.');
    if (!password) return showError('Enter your password, or use the magic link button.');

    try {
      const activeToken = await signInWithPassword(email, password);
      await showApp(activeToken);
    } catch (error) {
      showError(error instanceof Error ? error.message : 'Login failed.');
    }
  });

  magicButton?.addEventListener('click', async () => {
    errorBox.hidden = true;
    const formData = new FormData(loginForm);
    const email = String(formData.get('email') || '').trim();
    if (!email) return showError('Enter your email.');

    try {
      await sendMagicLink(email);
      showError('Magic link sent. Check your email, then return here.');
    } catch (error) {
      showError(error instanceof Error ? error.message : 'Login failed.');
    }
  });

  logoutButton?.addEventListener('click', () => {
    localStorage.removeItem(storageKey);
    window.location.reload();
  });

  document.addEventListener('click', async (event) => {
    const target = event.target as HTMLElement;
    const copyButton = target.closest<HTMLButtonElement>('[data-copy-license]');
    if (copyButton) {
      const key = copyButton.getAttribute('data-copy-license') || '';
      await navigator.clipboard.writeText(key);
      copyButton.textContent = 'Copied';
      window.setTimeout(() => { copyButton.textContent = 'Copy'; }, 1400);
      return;
    }

    const button = target.closest<HTMLButtonElement>('[data-approve], [data-reject], [data-create-license]');
    if (!button) return;

    const approveId = button.getAttribute('data-approve');
    const rejectId = button.getAttribute('data-reject');
    const licenseId = button.getAttribute('data-create-license');
    const activeToken = getStoredToken();
    const id = approveId || rejectId || licenseId;
    if (!id) return;

    button.disabled = true;
    try {
      if (licenseId) {
        await createLicense(activeToken, licenseId);
        showActionMessage('License created.');
      } else {
        await updateRequestStatus(activeToken, id, approveId ? 'approved' : 'rejected');
      }
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Action failed.');
    } finally {
      button.disabled = false;
    }
  });

  if (!token) {
    loginPanel.hidden = false;
    appPanel.hidden = true;
    return;
  }

  showApp(token).catch((error) => {
    localStorage.removeItem(storageKey);
    loginPanel.hidden = false;
    appPanel.hidden = true;
    showError(error instanceof Error ? error.message : 'Admin check failed.');
  });
}
