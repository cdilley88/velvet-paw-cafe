# The Velvet Paw

**Coffee, Cats & Confidential Matters**

The Velvet Paw is a standalone fictional portfolio website for a cozy film-noir cat café and adoption lounge presented as a private detective agency run by cats. It is an IntegralTec Systems concept project—not a real café, rescue, or reservation service.

## Technology

- Vite
- React
- TypeScript
- Plain modular, responsive CSS
- No backend, component library, or runtime dependencies beyond React

## Run locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Project structure

```text
public/
  images/             Replaceable resident-cat portrait art
src/
  components/         Reusable page sections and interactions
  data/
    cats.ts           Resident profiles and portrait references
    menu.ts           All menu items and centrally editable prices
    reports.ts        Events and community dispatches
    site.ts           Navigation, business details, and narration
    types.ts          Shared content types
  App.tsx             Page composition
  main.tsx            React entry point
  styles.css          Visual system and responsive layouts
```

## Editing content

- Change cat profiles in `src/data/cats.ts`.
- Change prices, names, descriptions, and dietary tags in `src/data/menu.ts`.
- Change events in `src/data/reports.ts`.
- Change navigation, contact details, hours, and rotating narration in `src/data/site.ts`.

## Replacing images

The six current portraits in `public/images/` are purpose-made local SVG placeholders, so the site works without remote image services. To use finished photography:

1. Add optimized images to `public/images/` (WebP or AVIF recommended).
2. Update the relevant `portrait` value in `src/data/cats.ts`, such as `/images/mabel.webp`.
3. Use `portraitPosition` on a cat record if a photo needs a different focal point.

Keep meaningful `name` and `alias` copy because the component builds accessible alt text from them.

## Current interaction notes

- Dossier cards reveal expanded confidential notes.
- Menu categories use accessible tab semantics.
- The reservation form uses local browser validation and displays a confirmation state. No information is transmitted or stored.
- The ambience button is intentionally a visual concept control; it does not autoplay or load audio.
- Decorative motion respects `prefers-reduced-motion`.

## Suggested future features

1. Replace placeholder portraits with a cohesive commissioned photo set and add image credits.
2. Connect reservations to a real availability service or lightweight serverless endpoint with spam protection.
3. Split case files, menu, and events into routes backed by a small CMS for client-editable content.
