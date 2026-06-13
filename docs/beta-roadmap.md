# Stentor private beta roadmap

This document defines the first operational roadmap for Stentor after the software reaches a usable beta build.

## Product positioning

Stentor is the ecosystem.

- Stentor Lite: free Tauri app for macOS, Windows and Linux.
- Stentor Pro: professional live-production app for macOS, Windows and Linux.
- During the first release phase, Pro access is private beta, not public checkout.

## Phase 1: Private beta intake

Goal: a real theatre, company, festival, school or artist can request Pro access without emailing manually.

Public flow:

1. User opens `/request-pro`, `/it/richiedi-prova` or `/fr/demander-essai`.
2. User signs in with Google, Microsoft or email link when auth is enabled.
3. User submits organization, role, expected use and requested platforms.
4. The request is stored as `pending`.
5. Admin reviews the request.

Minimum request fields:

- full name
- email
- organization
- role
- country
- expected use
- requested platforms: macOS, Windows, Linux
- seats requested
- message
- status: pending, approved, rejected, archived

## Phase 2: Account area

Goal: a beta user can see what is available without a direct email thread.

Account area should show:

- beta request status
- active licenses
- license expiration
- available seats / activations
- download links per platform
- notes or activation instructions

For now, downloads may remain disabled until build artifacts are uploaded.

## Phase 3: Admin console

Goal: Maurizio can manage beta access manually.

Admin actions:

- view pending beta requests
- approve request
- create license
- set expiration date
- set seat count
- set platform availability
- revoke license
- add internal note

Admin pages are private, no public navigation, no localization required.

## Phase 4: Licensing

Goal: Stentor Pro can verify that a user is allowed to use the app.

License fields:

- license key
- user id
- organization id
- plan: beta, trial, annual, educational, institutional
- status: active, expired, revoked
- starts at
- expires at
- max activations
- enabled platforms

Activation fields:

- license id
- platform
- device label
- device fingerprint hash
- app version
- activated at
- last seen at
- revoked at

The app should cache a valid license locally so that theatre use is not blocked by temporary network issues.

## Phase 5: Protected downloads

Goal: approved beta users can download Pro builds.

Download rules:

- Lite builds can be public.
- Pro builds require an approved account/license.
- macOS, Windows and Linux files should be tracked separately.
- Each build should have version, platform, file URL, checksum and release notes.

## Phase 6: Payments later

Payments are not part of the first beta.

Only after the beta flow works reliably:

- Stripe Checkout or Paddle can be added.
- Account area can show invoices/subscriptions.
- Licenses can be created automatically after payment.

## First implementation slice

1. Create Supabase project.
2. Apply database schema.
3. Add environment variables to the site.
4. Enable Google/Microsoft/email auth.
5. Connect beta request form to database.
6. Build minimal account placeholder.
7. Build minimal admin placeholder.
8. Add license creation manually from admin.
