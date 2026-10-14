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

- `src/app`: homepage, Reviving the Rasm coming-soon page, privacy page, metadata, sitemap, and 404 page.
- `src/components`: letter-family selector, navigation, and video viewer.
- `src/lib`: project details and Arabic letter families.
- `public`: the existing logo, original demonstration video, and optimized preview with a poster image.
- `legacy`: the previous Jekyll source, preserved for reference.

The letter-family selector runs entirely in the browser. There is no typing demo, prediction API, database, or external service to configure. Fonts are served locally.

## Input convention

`src/lib/letters.ts` follows the 18-base-character mapping in the iOS keyboard's `DotlessAlphabet.swift`. The selector shows the selected base shape and its compatible restored letters, with 18 buttons for choosing a family.

| Base | Compatible letters |
| --- | --- |
| ا | ا أ إ آ |
| ٮ | ب ت ث |
| ح | ج ح خ |
| د | د ذ |
| ر | ر ز |
| س | س ش |
| ص | ص ض |
| ط | ط ظ |
| ع | ع غ |
| ڡ | ف ق |
| ك | ك |
| ل | ل |
| م | م |
| ں | ن |
| و | و ؤ |
| ه | ه ة |
| ى | ي ى ئ |
| ء | ء |

Nūn stays separate in every word position. Hamza preserves its carrier. The exact base codepoints are `ٮ` (U+066E), `ڡ` (U+06A1), `ں` (U+06BA), and `ى` (U+0649).

The keyboard contract preserves the input's character count, order, family, and locked positions. Compatible suggestions appear while the word stays as entered. Space accepts the top candidate; selecting a suggestion accepts it and adds a space. No candidate leaves the original input unchanged. Untouched positions remain fixed during partial edits.

Corpus preprocessing uses the same family mappings. Diacritized or unsupported spellings are left untouched rather than silently normalized. The website illustrates this convention with individual letter families; it does not implement a restoration engine.

## Deployment

Deployment requires a Next.js-compatible host (such as a Node.js server), rather than GitHub Pages' Jekyll build. No deployment has been configured or published.
