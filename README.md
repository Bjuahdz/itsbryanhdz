# Portfolio Website

Personal portfolio for [Bryan Juarez Hernandez](https://github.com/Bjuahdz) — an archive-style site built with React, Vite, TypeScript, and Tailwind CSS v4.

The **home page** (`/`) scrolls through projects, experience, education, about, and contact. **Full-page routes** provide a project dossier (`/projects`) and blog (`/blog`). Section links use hash URLs (`/#projects`, `/#contact`, etc.) with smooth scrolling.

## Getting started

**Prerequisites:** Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Quality checks

```bash
npm run lint
npm run test
npm run build
npm run preview   # optional — preview dist/ locally
```

## Scripts

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Start the development server |
| `npm run build` | Type-check and produce a production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |
| `npm run test` | Run Vitest once |
| `npm run test:watch` | Run Vitest in watch mode |

## Site map

| Path | What it shows |
| ---- | ------------- |
| `/` | Home: hero, project spine gallery, experience, education, about, contact |
| `/#projects`, `/#experience`, … | Hash links scroll to home sections (sidebar + hero CTA) |
| `/projects` | Full technical dossier for all projects |
| `/blog` | Project notes and field notes |

Navigation uses client-side routing via [`AppLink`](src/components/ui/AppLink.tsx) (`history.pushState`) — no React Router. External links and modifier-key clicks behave like normal anchors.

## Customize your content

Edit data files first; layout components rarely need changes for copy or portfolio updates.

| File | What to change |
| ---- | -------------- |
| [`src/data/site.ts`](src/data/site.ts) | Name, tagline, bio, email, location, skill groups, hero copy, resume URL, avatar |
| [`src/data/projects.ts`](src/data/projects.ts) | Projects (title, description, tech, outcomes, links, media) |
| [`src/data/experience.ts`](src/data/experience.ts) | Experience timeline events |
| [`src/data/profile.ts`](src/data/profile.ts) | Education entries and certificates |
| [`src/data/blog.ts`](src/data/blog.ts) | Blog posts |
| [`src/data/skillBrandColors.ts`](src/data/skillBrandColors.ts) | Brand colors for skill chips and tech dock icons |
| [`index.html`](index.html) | Document `<title>` and meta description |

Shared TypeScript shapes live in [`src/types/index.ts`](src/types/index.ts).

### Project media

1. **Images** — `public/images/projects/` (e.g. `my-app.png`)
2. **Videos** — `public/videos/projects/` (e.g. `demo.mp4`)
3. Set `imageUrl` and/or `videoUrl` in [`src/data/projects.ts`](src/data/projects.ts) (video wins in the spine gallery preview)
4. `expandedLayout: 'mobile'` — phone-frame preview; `'wide'` — full-width panel

Other static assets:

| Asset | Path | Referenced in |
| ----- | ---- | ------------- |
| Portrait | `public/images/grad_photo.png` | `site.avatarUrl` |
| Resume PDF | `public/resume/Bryan-Juarez-Hernandez-Resume.pdf` | `site.resumeUrl` |
| Phone frame | `public/images/phone_frame.png` | spine gallery (mobile layout) |
| Favicon | `public/favicon.svg` | `index.html` |

## Project structure

```
src/
├── App.tsx                 Route switch (home / projects / blog)
├── main.tsx                Entry + theme bootstrap (no flash)
├── index.css               Global styles and design tokens
├── components/
│   ├── layout/
│   │   ├── ArchiveLayout   Sidebar, scroll spy, footer actions
│   │   ├── Hero            Home hero (typing name + brief)
│   │   ├── Footer
│   │   └── SiteBackground
│   ├── sections/
│   │   ├── HomeProjects    Spine gallery wrapper
│   │   ├── ProjectSpineGallery
│   │   ├── Projects        /projects dossier
│   │   ├── Experience, Education, AboutMe, Contact, Blog
│   │   └── SkillStrip
│   ├── ui/
│   │   ├── AppLink         Client-side nav + hash scroll
│   │   ├── SidebarContactButton, ResumeDownloadButton
│   │   ├── ThemeToggle, SidebarThemeToggle
│   │   └── TechIcon, BrandIcons, …
│   └── react-bits/text/    TextType (GSAP), ShinyText (Motion)
├── data/                   Site config and content (edit often)
├── hooks/
│   ├── useHeroScroll       Past-hero detection for sidebar CTAs
│   ├── useThemeMode
│   ├── usePathname
│   └── useScrollToHomeHash
├── utils/
│   ├── scrollToHash.ts
│   └── homeScrollSpy.ts
├── test/                   Vitest + Testing Library
└── types/

public/
├── images/
├── videos/projects/
└── resume/
```

## Features

- **Archive layout** — sticky sidebar: section nav, Georgia location map, profile links, footer actions
- **Sidebar CTAs** — primary **Contact Me**; **Resume** + theme toggle on one row (after scrolling past the home hero, or on `/projects` / `/blog`)
- **Home hero** — typed name and rotating brief phrases ([React Bits](https://reactbits.dev) `TextType` + GSAP)
- **Project spine gallery** — interactive home preview; `/projects` is the full dossier
- **Experience highlights** — `ShinyText` on timeline copy (Motion)
- **Light / dark theme** — `localStorage` key `portfolio-theme`; set in `main.tsx` before paint
- **Tests** — routing, scroll spy, gallery interactions, data sanity checks

## Tech stack

| Layer | Choice |
| ----- | ------ |
| Build | [Vite](https://vite.dev) 8 |
| UI | [React](https://react.dev) 19 |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styles | [Tailwind CSS](https://tailwindcss.com/) v4 |
| Icons | [Lucide](https://lucide.dev/) (UI), [react-icons](https://react-icons.github.io/react-icons/) (tech brands) |
| Animation | [GSAP](https://gsap.com/) + [Motion](https://motion.dev/) |
| Tests | [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) |

## Possible next steps

Not required to run the site; useful when polishing:

- Initial git push and GitHub Actions (`lint`, `test`, `build`)
- Open Graph / Twitter meta tags in `index.html`
- Code-split `/projects` and `/blog` for a smaller home bundle
- Consolidate to one animation library (GSAP or Motion)
- Split `index.css` into smaller files as styles grow
