# Questionari differiti Stentor

Questa integrazione usa Supabase come backend pubblico per i questionari post-spettacolo compilabili fuori dalla rete locale Stentor.

## Cosa viene aggiunto

- Tabelle Supabase `audience_surveys` e `audience_survey_responses`.
- Edge Function `stentor-survey`.
- Pagina pubblica `https://www.stentor.live/q?token=...`.
- Pagina admin `https://www.stentor.live/admin/surveys`.

## Deploy Supabase

Dalla cartella del repository:

```bash
supabase link --project-ref <PROJECT_REF>
supabase db push
supabase functions deploy stentor-survey
supabase secrets set PUBLIC_SITE_URL=https://www.stentor.live
```

La funzione usa automaticamente `SUPABASE_URL` e `SUPABASE_SERVICE_ROLE_KEY`, già disponibili nell'ambiente Supabase Edge Functions.

Opzionale, per proteggere la pubblicazione da client non autorizzati:

```bash
supabase secrets set STENTOR_SURVEY_PUBLISH_KEY=<CHIAVE_LUNGA_RANDOM>
```

La build Mac attuale non invia ancora questa chiave. Finché non aggiungiamo il campo dedicato nell'app, lasciare questo secret non impostato.

## Endpoint da inserire in Stentor

Nel pannello Stentor:

`Pubblico -> Opinioni pubblico -> Questionario post-spettacolo -> Backend pubblico questionario`

inserire:

```text
https://<PROJECT_REF>.functions.supabase.co/stentor-survey
```

Poi:

1. Attivare `Questionario post-spettacolo`.
2. Scegliere la durata, per esempio `7 giorni`.
3. Attivare `Online`.
4. Incollare l'endpoint.
5. Premere `Pubblica`.

Stentor riceve un link pubblico nel formato:

```text
https://www.stentor.live/q?token=<TOKEN>
```

Questo link è quello da mostrare agli spettatori o trasformare in QR.

## Dove vedere i questionari

Dopo il deploy e la pubblicazione da Stentor:

- elenco questionari: `https://www.stentor.live/admin/surveys`
- compilazione spettatore: `https://www.stentor.live/q?token=<TOKEN>`
- riepilogo feedback già esistente: `https://www.stentor.live/admin/feedback`

La pagina admin richiede accesso Supabase con profilo `is_admin = true`.

## Privacy

La pagina pubblica non richiede nome, email o account. Le risposte vengono salvate come JSON anonimo nella tabella `audience_survey_responses`.
