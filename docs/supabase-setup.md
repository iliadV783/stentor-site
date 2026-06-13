# Supabase setup for Stentor private beta

## 1. Create project

Create a Supabase project for `stentor.live`.

Keep these values ready:

- Project URL
- Anon public key
- Service role key, server-side only

## 2. Environment variables

The public site will need:

```bash
PUBLIC_SUPABASE_URL="https://...supabase.co"
PUBLIC_SUPABASE_ANON_KEY="..."
```

Server-side/admin functions will later need:

```bash
SUPABASE_SERVICE_ROLE_KEY="..."
```

Never expose the service role key in client-side JavaScript.

## 3. Auth providers

Enable:

- Email magic link
- Google OAuth
- Microsoft / Azure OAuth

Redirect URLs to configure:

```text
https://www.stentor.live/account
https://www.stentor.live/it/account
https://www.stentor.live/fr/account
http://localhost:4321/account
http://localhost:4321/it/account
http://localhost:4321/fr/account
```

## 4. Apply schema

Run:

```sql
supabase/migrations/001_private_beta.sql
```

This creates:

- organizations
- profiles
- beta_requests
- licenses
- license_activations
- build_artifacts

## 5. Create first admin

After signing in once, set your user as admin:

```sql
update public.profiles
set is_admin = true
where email = 'your-email@example.com';
```

If the profile row does not exist yet, insert it manually or add the automatic profile trigger in the next implementation slice.

## 6. Next implementation slice

- Add Supabase client helper.
- Replace fake beta form submit with real insert into `beta_requests`.
- Add account page reading request/license status.
- Add admin page reading pending beta requests.
- Add license creation action.
