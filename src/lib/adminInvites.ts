const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;
const storageKey = 'stentor_admin_access_token';

function qs<T extends HTMLElement>(selector: string) {
  return document.querySelector<T>(selector);
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

function getStoredToken() {
  return localStorage.getItem(storageKey) || '';
}

function formatDate(value: string | null) {
  if (!value) return '—';
  return new Date(value).toLocaleDateString('it-IT', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

function statusClass(status: string) {
  if (status === 'accepted') return 'status-approved';
  if (status === 'revoked' || status === 'expired') return 'status-rejected';
  return 'status-pending';
}

function renderInviteRows(invites: any[]) {
  const target = qs<HTMLElement>('[data-admin-invites-list]');
  if (!target) return;

  if (!invites.length) {
    target.innerHTML = '<p class="text-white/45">Nessun invito creato.</p>';
    return;
  }

  target.innerHTML = invites.map((invite) => `
    <div class="invite-card">
      <div>
        <span class="license-label">Destinatario</span>
        <div class="text-white/80 font-medium">${invite.email}</div>
        ${invite.name ? `<div class="text-white/35 text-xs mt-1">${invite.name}</div>` : ''}
      </div>
      <div>
        <span class="license-label">Stato</span>
        <span class="${statusClass(invite.status)}">${invite.status}</span>
      </div>
      <div>
        <span class="license-label">Scadenza link</span>
        <div class="text-white/55">${formatDate(invite.expires_at)}</div>
      </div>
      <div>
        <span class="license-label">Creato</span>
        <div class="text-white/55">${formatDate(invite.created_at)}</div>
      </div>
    </div>
  `).join('');
}

async function loadInvites(token: string) {
  const invites = await apiFetch('/rest/v1/invites?select=id,email,name,status,expires_at,created_at&order=created_at.desc&limit=20', token) as any[];
  renderInviteRows(invites);
}

async function createInvite(token: string, email: string, name: string) {
  const response = await fetch(`${supabaseUrl}/functions/v1/create-invite`, {
    method: 'POST',
    headers: {
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      name: name || null,
    }),
  });

  if (!response.ok) {
    throw new Error(await readError(response, 'Invite could not be created.'));
  }

  const body = await response.json();
  if (!body.ok) throw new Error(body.error || 'Invite could not be created.');
  return body as { invite_url: string };
}

export function setupAdminInvites() {
  const form = qs<HTMLFormElement>('[data-admin-invite-form]');
  const emailInput = qs<HTMLInputElement>('[data-admin-invite-email]');
  const nameInput = qs<HTMLInputElement>('[data-admin-invite-name]');
  const button = qs<HTMLButtonElement>('[data-admin-invite-submit]');
  const message = qs<HTMLElement>('[data-admin-invite-message]');

  if (!form || !emailInput || !nameInput || !button || !message || !supabaseUrl || !supabaseAnonKey) return;

  const token = getStoredToken();
  if (token) {
    loadInvites(token).catch((error) => {
      const target = qs<HTMLElement>('[data-admin-invites-list]');
      if (target) target.innerHTML = `<p class="text-red-200">${error instanceof Error ? error.message : 'Invites could not be loaded.'}</p>`;
    });
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const activeToken = getStoredToken();
    if (!activeToken) {
      message.innerHTML = '<p class="text-red-200">Accedi come admin prima di creare un invito.</p>';
      return;
    }

    const email = emailInput.value.trim();
    const name = nameInput.value.trim();
    if (!email) return;

    button.disabled = true;
    button.textContent = 'Creazione...';
    message.innerHTML = '';

    try {
      const result = await createInvite(activeToken, email, name);
      message.innerHTML = `
        <div class="rounded-xl border border-green-400/20 bg-green-400/10 text-green-100 text-sm leading-[1.5] p-4">
          <strong class="block mb-2">Invito creato.</strong>
          <span class="text-white/55">Copia questo link per il test:</span>
          <div class="mt-2 flex flex-col sm:flex-row gap-2 sm:items-center">
            <code class="flex-1 text-xs text-white/75 break-all rounded-lg bg-black/30 border border-white/10 px-3 py-2">${result.invite_url}</code>
            <button type="button" class="admin-button-live" data-copy-invite-url="${result.invite_url}">Copia</button>
          </div>
        </div>
      `;
      form.reset();
      await loadInvites(activeToken);
    } catch (error) {
      message.innerHTML = `<p class="rounded-xl border border-red-500/30 bg-red-500/10 text-red-200 text-sm leading-[1.5] p-4">${error instanceof Error ? error.message : 'Invito non creato.'}</p>`;
    } finally {
      button.disabled = false;
      button.textContent = 'Crea invito demo';
    }
  });

  document.addEventListener('click', async (event) => {
    const target = event.target as HTMLElement;
    const copyButton = target.closest<HTMLButtonElement>('[data-copy-invite-url]');
    if (!copyButton) return;

    const url = copyButton.getAttribute('data-copy-invite-url') || '';
    await navigator.clipboard.writeText(url);
    copyButton.textContent = 'Copiato';
    window.setTimeout(() => { copyButton.textContent = 'Copia'; }, 1400);
  });
}
