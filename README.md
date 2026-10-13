# Dotless website

A Next.js, React, and TypeScript site for the Dotless Arabic keyboard.

## Run locally

Use Node.js 20.9 or later (an active LTS release is recommended).

```sh
npm install
npm run dev
```

Open http://localhost:3000. Changes refresh automatically.

## Check and build

```sh
npm run typecheck
npm run build
npm start
```

## Structure

- `src/app`: homepage, privacy page, metadata, sitemap, and 404 page.
- `src/components`: letter-family selector, navigation, and Android video viewer.
- `src/lib`: project details and Arabic letter families.
- `public`: the existing logo and Android demonstration video.
- `legacy`: the previous Jekyll source, preserved for reference.

The letter-family selector runs entirely in the browser. There is no typing demo, prediction API, database, or external service to configure. Fonts are served locally.

Deployment requires a Next.js-compatible host (such as a Node.js server), rather than GitHub Pages' Jekyll build. No deployment has been configured or published.
