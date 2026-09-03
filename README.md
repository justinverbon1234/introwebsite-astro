# introwebsite — Astro

A personal website and journal for Justin Verbon — an editorial-style digital design space built with Astro.

## Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the dev server (localhost:4321) |
| `npm run build` | Build the production site to `./dist/` |
| `npm run preview` | Preview the build locally |
| `npm run astro ...` | Run CLI commands (`astro add`, `astro check`, ...) |

## Project structure

```text
/
├── public/
│   ├── favicon.svg
│   └── images/             # Static images
├── src/
│   ├── components/         # Navbar, JournalPreview
│   ├── data/journal/       # Journal entries as Markdown (content collection)
│   ├── layouts/            # Layout.astro (shared shell)
│   ├── pages/
│   │   ├── index.astro        # Homepage
│   │   └── journal/             # Archive + dynamic entry pages
│   └── styles/                  # Per-section CSS
└── astro.config.mjs
```

## Adding a journal entry

1. Add a new Markdown file to `src/data/journal/` with frontmatter (`title`, `category`, `date`, `eyebrow`, `description`, and optionally `readTime`/`status`).
2. Astro automatically lists it in the archive and creates its page.



## Learn more

[Astro docs](https://docs.astro.build)