# werewolf-discord-site

Public website for **Wolfverine**, the Werewolf bot for Discord: home, how to play, commands, help center, about, privacy policy and terms of service. English (default) and Vietnamese.

Built with [Astro](https://astro.build) as a fully static site (no JavaScript shipped except the root language redirect). Hosted on Vercel.

## URLs

`https://werewolf-discord.casbersolution.com/<lang>/<page>/`, e.g. `/en/how-to-play/`, `/vi/privacy/`.
`/` sends Vietnamese browsers to `/vi/` and everyone else to `/en/`.

| Page | Path |
|------|------|
| Home | `/<lang>/` |
| How to play | `/<lang>/how-to-play/` |
| Commands | `/<lang>/commands/` |
| Help center | `/<lang>/help/` |
| About | `/<lang>/about/` |
| Privacy policy | `/<lang>/privacy/` |
| Terms of service | `/<lang>/terms/` |

## Develop

Requires Node 24 (`.nvmrc`; Astro needs ≥ 22.23.4).

```sh
npm ci
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npx astro check    # type check
```

## Where things live

| What | File |
|------|------|
| Bot name, application ID, invite permissions, contact email, legal effective date, default timings | `src/site.config.ts` |
| Roles, commands, FAQ (en + vi) | `src/data/game.ts` |
| Privacy policy and terms (one Markdown file per language) | `src/content/legal/*.md` |
| Navigation and UI strings | `src/i18n/ui.ts` |
| Pages | `src/pages/[lang]/*.astro` |

## Keeping it in sync with the bot

The game facts on this site come from the bot repository (`werewolf-discord`): business rules in `docs/00-ssot/service-scope.md`, commands in `docs/00-ssot/api-contracts.md`, stored data in `docs/20-operations/security.md §8`. When those change, update `src/data/game.ts`, `src/site.config.ts` or the privacy policy here, and bump `legalEffectiveDate` when the legal text changes.

## Add a language

1. Add the code to `LANGS` in `src/i18n/ui.ts` and to `locales` in `astro.config.mjs`.
2. Add its strings in `src/i18n/ui.ts`, its texts in `src/data/game.ts` and in each page's `copy` object.
3. Add `src/content/legal/privacy.<lang>.md` and `terms.<lang>.md`.

## Deploy (Vercel + GoDaddy)

1. Vercel → **Add New → Project** → import this GitHub repository. Framework preset: **Astro** (detected). No environment variables are needed.
2. Vercel → Project → **Settings → Domains** → add `werewolf-discord.casbersolution.com`.
3. GoDaddy → **My Products → DNS** for `casbersolution.com` → **Add record**: type `CNAME`, name `werewolf-discord`, value as shown by Vercel (usually `cname.vercel-dns.com`), TTL default. Leave the other records alone.
4. Wait until Vercel shows the domain as valid (HTTPS is issued automatically).
5. Discord Developer Portal → the bot's application → **General Information**: Privacy Policy URL `https://werewolf-discord.casbersolution.com/en/privacy/`, Terms of Service URL `https://werewolf-discord.casbersolution.com/en/terms/`.

Canonical and `hreflang` links use `https://werewolf-discord.casbersolution.com` (override with the `SITE_URL` environment variable).

## License

[MIT](LICENSE)
