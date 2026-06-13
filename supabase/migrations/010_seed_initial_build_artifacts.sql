-- Initial download rows for the account area.
-- file_url can stay null until a real build is uploaded.

insert into public.build_artifacts (
  product,
  platform,
  version,
  channel,
  file_url,
  checksum_sha256,
  release_notes,
  is_public,
  is_active
) values
  ('lite', 'macos', '0.1.0', 'beta', null, null, 'Stentor Lite public build placeholder.', true, false),
  ('lite', 'windows', '0.1.0', 'beta', null, null, 'Stentor Lite public build placeholder.', true, false),
  ('lite', 'linux', '0.1.0', 'beta', null, null, 'Stentor Lite public build placeholder.', true, false),
  ('pro', 'macos', '0.1.0', 'beta', null, null, 'Stentor Pro macOS beta placeholder.', false, false),
  ('pro', 'windows', '0.1.0', 'beta', null, null, 'Stentor Pro Windows beta placeholder.', false, false),
  ('pro', 'linux', '0.1.0', 'beta', null, null, 'Stentor Pro Linux beta placeholder.', false, false)
on conflict (product, platform, version, channel)
do update set
  release_notes = excluded.release_notes,
  is_public = excluded.is_public,
  is_active = excluded.is_active;
