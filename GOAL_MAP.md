# Noven Goal Map

## Routes

| Screen | Purpose | Required UI | Primary Action | Exit Path | Status |
| --- | --- | --- | --- | --- | --- |
| `/` | Introduce Noven and route visitors into the app detail flow. | Hero, Noven intro, app card, feature grid, developer section, privacy/support footer. | Explore Noven. | Scrolls to `#apps`, then app card opens `/noven/noven`. | Pass |
| `/noven/noven` | Present the Noven App Store-style product page. | Icon, title, tagline, App Store CTA, overview, screenshots, features, developer support, legal links. | GET. | Opens App Store listing URL for app ID `6772000400`. | Pass |
| `/noven/noven/privacy` | Explain Noven data practices for users and App Review. | Back link, data collection, storage/sync, user choices, support contact. | Back to App. | Returns to `/noven/noven`. | Pass |
| `/noven/noven/terms` | Explain Noven usage terms and subscription handling. | Back link, habit tracking terms, responsibility, subscriptions, acceptable use, support contact. | Back to App. | Returns to `/noven/noven`. | Pass |
| `/contact` | Provide support and feedback path. | Email support, social link, feedback section, message form shell. | Email Support. | Opens mail client for `uptocodejs@gmail.com`. | Pass |

## Redirected Legacy Routes

| Route | Exit Path | Status |
| --- | --- | --- |
| `/privacy` | `/noven/noven/privacy` | Pass |
| `/terms` | `/noven/noven/terms` | Pass |
| `/security` | `/noven/noven/privacy` | Pass |
| `/services` and `/services/*` | `/` | Pass |
| `/teams` and `/teams/*` | `/` | Pass |

## Risks

- App Store CTA uses `https://apps.apple.com/app/id6772000400`; confirm it resolves publicly after App Review or public listing activation.
- The contact form is visual only. Email support is the working support path.
- Screenshots currently use the `en-US` set on the public site; App Store Connect still needs manual uploads for every localization.
