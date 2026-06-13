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

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;
const storageKey = 'stentor_admin_access_token';
const approveButtonClass = 'h-9 px-3 rounded-lg border border-green-400/25 bg-green-400/10 text-green-100 hover:bg-green-400/20 hover:border-green-400/45 cursor-pointer text-sm font-medium transition-colors disabled:opacity-45 disabled:cursor-wait';
const rejectButtonClass = 'h-9 px-3 rounded-lg border border-red-400/25 bg-red-400/10 text-red-100 hover:bg-red-400/20 hover:border-red-400/45 cursor-pointer text-sm font-medium transition-colors disabled:opacity-45 disabled:cursor-wait';

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

function statusClass(status: AdminRequest['status']) {
  if (status === 'approved') return 'status-approved';
  if (status === 'rejected') return 'status-rejected';
  return 'status-pending';
}

function renderRequests(requests: AdminRequest[]) {
  const tbody = qs<HTMLTableSectionElement>('[data-admin-requests]');
  if (!tbody) return;

  if (!requests.length) {
    tbody.innerHTML = '<tr><td class="admin-td text-white/45" colspan="7">No beta requests yet.</td></tr>';
    return;
  }

  tbody.innerHTML = requests.map((request) => {
    const platforms = (request.requested_platforms || []).map((platform) => `<span class="admin-platform">${platform}</span>`).join('');
    return `<tr>
      <td class="admin-td text-white/85"><strong>${request.full_name || '—'}</strong><div class="text-white/35 text-xs mt-1">${new Date(request.created_at).toLocaleDateString()}</div></td>
      <td class="admin-td text-white/55">${request.email}</td>
      <td class="admin-td text-white/55">${request.organization_name || '—'}<div class="text-white/30 text-xs mt-1">${request.role || ''}</div></td>
      <td class="admin-td">${platforms || '<span class="text-white/30">—</span>'}</td>
      <td class="admin-td text-white/55">${request.requested_seats || 1}</td>
      <td class="admin-td"><span class="${statusClass(request.status)}">${request.status}</span></td>
      <td class="admin-td"><div class="flex gap-2"><button type="button" class="${approveButtonClass}" data-approve="${request.id}">Approve</button><button type="button" class="${rejectButtonClass}" data-reject="${request.id}">Reject</button></div></td>
    </tr>`;
  }).join('');
}

function renderStats(requests: AdminRequest[]) {
  const pending = requests.filter((item) => item.status === 'pending').length;
  const approved = requests.filter((item) => item.status === 'approved').length;
  qs<HTMLElement>('[data-stat-pending]')!.textContent = String(pending);
  qs<HTMLElement>('[data-stat-approved]')!.textContent = String(approved);
  qs<HTMLElement>('[data-stat-licenses]')!.textContent = '--';
}

async function loadRequests(token: string) {
  const requests = await apiFetch('/rest/v1/beta_requests?select=id,full_name,email,organization_name,role,country,requested_platforms,requested_seats,message,status,created_at&order=created_at.desc', token) as AdminRequest[];
  renderRequests(requests);
  renderStats(requests);
}

async function updateRequestStatus(token: string, id: string, status: string) {
  await apiFetch(`/rest/v1/beta_requests?id=eq.${id}`, token, {
    method: 'PATCH',
    headers: { Prefer: 'return=minimal' },
    body: JSON.stringify({ status }),
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
    const button = target.closest<HTMLButtonElement>('[data-approve], [data-reject]');
    if (!button) return;

    const approveId = button.getAttribute('data-approve');
    const rejectId = button.getAttribute('data-reject');
    const activeToken = getStoredToken();
    const nextStatus = approveId ? 'approved' : 'rejected';
    const id = approveId || rejectId;
    if (!id) return;

    button.disabled = true;
    try {
      await updateRequestStatus(activeToken, id, nextStatus);
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
