# Yoga Day SHF

Marketing site for **Scotland's International Yoga Day 2026**, aligned with the [Yoga Day SHF Figma Make preview](https://nougat-kiosk-91062550.figma.site/#home).

## Content

Page copy lives in **`content/site.md`**. The home page renders this file with `react-markdown`, so you can change headings, sections, and links without touching React code.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Themes

The header includes **Classic** and **Modern** themes (persisted in `localStorage`), matching the Figma “Switch to Modern Theme” control.

## Deploy on Vercel

1. Push this folder to a Git repository.
2. In [Vercel](https://vercel.com/new), import the repo and use the default Next.js settings.
3. After the first deploy, optional: set **Project → Settings → Domains** and add **Site URL** in `app/layout.tsx` as `metadataBase` for canonical metadata.
