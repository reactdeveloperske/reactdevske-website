<h1 align="center" style="margin-top: 1em; margin-bottom: 3em;">
  <p><a href="https://reactdevske.netlify.app/"><img alt="logo" src="./public/reactdevske.svg" width="125"></a></p>
  <p> <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" alt="Waving Hand" width="25px" height="25px"> React Developers Community — Kenya</p>
</h1>

This repository contains the source for the community showcase website maintained by the React Developers Community (Kenya). The site is built with Next.js, TypeScript and Tailwind CSS, includes end-to-end tests with Playwright, and is container-ready using Docker.

Live production: https://www.reactdevske.org/

**Table of contents**
- Overview
- Features
- Tech stack
- Quickstart
- Docker
- Testing
- Project structure
- Contributing
- License & contact

**Overview**

This site showcases the community, upcoming events, contact information and resources for React developers in Kenya. It's intended as a community-maintained, easy-to-contribute codebase for public-facing content and event announcements.

**Features**
- Responsive, accessible UI built with Next.js and Tailwind CSS.
- Pages for home, about, contact, events, news, forum and members.
- Reusable component library under `src/components`.
- Playwright end-to-end tests (see `e2e/`).
- Docker support for production-like local testing.

**Tech stack**
- Next.js (pages-based) + React
- TypeScript
- Tailwind CSS
- Playwright for E2E testing
- Prettier, ESLint, and TypeScript for quality checks

**Quickstart (local development)**

Prerequisites:
- Node.js 16+ (or the version compatible with the `next` dependency)
- npm or yarn

Install dependencies:

```bash
npm install
# or
yarn install 
```

Run the development server:

```bash
npm run dev
# opens at http://localhost:3000
```

Build for production:

```bash
npm run build
npm run start
```

Useful scripts (from `package.json`):
- `npm run dev` — starts Next.js in development mode
- `npm run build` — produces a production build
- `npm run start` — runs the production build
- `npm run lint` — runs ESLint
- `npm run test` — runs Playwright tests

**Docker**

This repository contains a `Dockerfile` and `docker-compose.yml` for running the app in a container.

Build & run with Docker Compose:

```bash
docker-compose up --build
```

The app will be available on the port configured in `docker-compose.yml` (default: 3000).

**Testing (Playwright)**

End-to-end tests are in the `e2e/` folder and are run using Playwright. To run tests locally:

```bash
npm run test
```

Playwright config is at `playwright.config.ts`.

**Project structure (important files & folders)**

- `public/` — static assets (images, manifest)
- `src/pages/` — Next.js pages (routes)
- `src/components/` — shared React components (Navbar, HeroHeader, Events, ContactUs, etc.)
- `src/styles/` — global and module CSS (Tailwind entry)
- `e2e/` — Playwright end-to-end tests
- `Dockerfile`, `docker-compose.yml` — container configuration
- `package.json`, `tsconfig.json`, `next.config.js` — build & tooling

If you want to explore components, start with:
- `src/components/HeroHeader` — site hero
- `src/components/Navbar` — navigation and menu
- `src/components/Events` — events listing and display
- `src/components/ContactUs` — contact form and footer

**Contributing**

Contributions are welcome. Please follow the contribution guidelines and community standards:

- Contribution guide: [CONTRIBUTING.md](CONTRIBUTING.md)
- Code of conduct: [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)

Suggested workflow:
1. Fork the repo and create a feature branch.
2. Run the dev server and make changes.
3. Ensure TypeScript and lint checks pass: `npm run typecheck` and `npm run lint`.
4. Add/update tests if applicable.
5. Open a pull request with a clear description of your changes.

**Maintainers & contact**
If you need help or want to propose changes not suitable for a PR, open an issue or reach out via the community channels listed in the repo.

**License**
This project is open source — see the `LICENSE` file for details.

**Design resources**
Figma design file used for the website is available here:
https://www.figma.com/file/TVwnaDhBGeVdnVKdf6H91C/React-developers-community-website

---
_Last updated: 2026-02-15_
