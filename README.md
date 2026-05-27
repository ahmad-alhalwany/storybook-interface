# Storybook Interface

[![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Storybook](https://img.shields.io/badge/Storybook-6.5-FF4785?logo=storybook&logoColor=white)](https://storybook.js.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.2-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Webpack](https://img.shields.io/badge/Webpack-5-8DD6F9?logo=webpack&logoColor=black)](https://webpack.js.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A **component-driven UI library** built with Create React App and Storybook. It showcases reusable marketing and messaging interfaces — product grids, chat panels, and buttons — with **design-spec integration** (Figma and image overlays) so designers and developers stay aligned during development.

> **Note:** The CRA dev server (`npm start`) is a placeholder. The primary workflow is **Storybook** on port `6006`.

---

## Overview

This project (`frontwork` in `package.json`) is a Storybook-first React workspace for building and documenting UI components in isolation. Each component ships with its own `.stories.js` file, interactive controls, and linked design references via `storybook-addon-designs`.

It was used as the foundation for a **custom marketing interface** that enabled 50+ clients to personalize campaigns efficiently — demonstrating component reusability, design handoff, and rapid UI iteration without a full app shell.

---

## Architecture

```text
┌─────────────────────────────────────────────────────────────┐
│                     Storybook (port 6006)                   │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │  Bestsellers │  │    Chat     │  │  Example / Button   │  │
│  │  + Item      │  │  (Reactstrap)│  │  (Figma design link)│  │
│  └──────┬──────┘  └──────┬──────┘  └──────────┬──────────┘  │
│         │                │                     │            │
│         └────────────────┴─────────────────────┘            │
│                          │                                  │
│              storybook-addon-designs (withDesign)           │
│              Cloudinary / Figma design previews             │
└─────────────────────────────────────────────────────────────┘
                          │
              public/assets/images/  (Nike products, chat avatar)
```

| Layer | Technology |
|-------|------------|
| UI framework | React 18 |
| Styling | Bootstrap 5, Reactstrap |
| Documentation | Storybook 6.5 (Webpack 5 builder) |
| Design integration | `storybook-addon-designs` |
| Build tool | Create React App (`react-scripts` 5) |
| Testing | React Testing Library (CRA default) |

---

## Features

- **Isolated component development** — build and preview UI without running a full application
- **Bestsellers grid** — Nike shoe product cards with image, name, type, and price
- **Chat panel** — profile header, message bubble, and send button (Reactstrap)
- **Design-addon integration** — Figma URLs and Cloudinary design screenshots in the Storybook Design tab
- **Interactive controls** — Storybook Controls for props like button size, label, and colors
- **CRA preset** — `@storybook/preset-create-react-app` for zero-config compatibility
- **Static Storybook build** — exportable docs via `build-storybook`

---

## Tech Stack

| Category | Tools |
|----------|-------|
| Core | React 18, React DOM |
| Component docs | Storybook 6.5.14 |
| Storybook addons | Essentials, Links, Interactions, CRA preset |
| Design handoff | storybook-addon-designs 6.3 |
| UI | Bootstrap 5, Reactstrap 9 |
| Bundler | Webpack 5 (Storybook builder) |
| Scaffolding | Create React App 5 |

---

## Prerequisites

- **Node.js** 16+ (18 recommended)
- **npm** 8+

---

## How to Run

### 1. Clone the repository

```bash
git clone https://github.com/ahmad-alhalwany/storybook-interface.git
cd storybook-interface
```

### 2. Install dependencies

```bash
npm install
```

> The repo includes `.npmrc` with `legacy-peer-deps=true` to resolve Storybook 6 peer-dependency conflicts. No extra flags needed.

### 3. Start Storybook (recommended)

```bash
npm run storybook
```

Open **http://localhost:6006** in your browser.

| Story | Path in sidebar | Description |
|-------|-----------------|-------------|
| Bestsellers | `Component / Bestsellers` | Product grid with Nike shoe cards |
| Chat | `Component / Chat` | Messaging UI with profile and send button |
| Button | `Example / Button` | Primary, Secondary, Large, Small variants |
| Introduction | `Example / Introduction` | Storybook getting-started MDX page |

### 4. (Optional) Start the CRA dev server

```bash
npm start
```

Opens **http://localhost:3000** — shows a placeholder message directing you to use Storybook instead.

### 5. Build static Storybook

```bash
npm run build-storybook
```

Output is written to `storybook-static/` — deployable to GitHub Pages, Netlify, or Vercel.

### 6. Run tests

```bash
npm test
```

---

## Project Structure

```text
storybook-interface/
├── .storybook/
│   ├── main.js              # Storybook config, addons, Webpack 5 builder
│   └── preview.js           # Global parameters (actions, controls)
├── public/
│   └── assets/images/       # Product and chat images served to Storybook
├── src/
│   ├── components/
│   │   ├── Bestsellers.js           # Product grid container
│   │   ├── BestsellersItem.js       # Single product card
│   │   ├── Bestsellers.stories.js   # Story + Cloudinary design preview
│   │   ├── Chat.js                  # Chat panel component
│   │   ├── Chat.stories.js          # Story + design preview
│   │   └── storybook-example/
│   │       ├── Button.js            # Reusable button with PropTypes
│   │       ├── Button.stories.js    # Variants + Figma design link
│   │       └── Introduction.stories.mdx
│   ├── App.js               # Placeholder — directs to Storybook
│   └── index.js
├── .npmrc                   # legacy-peer-deps=true
├── package.json
└── README.md
```

---

## Component Details

### Bestsellers

Renders a responsive grid of `BestsellersItem` cards. Each item displays a product image, name, type, and price. Images are loaded from `public/assets/images/` via Storybook's static file server.

### Chat

A messaging UI with:
- Profile avatar, name, and profession
- Message bubble with customizable text
- Reactstrap `Button` for sending messages

### Button (Example)

Standard Storybook example component with `primary`, `secondary`, `large`, and `small` variants. Links to a **Figma design file** in the Design addon panel.

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| `npm install` peer dependency errors | Ensure `.npmrc` exists with `legacy-peer-deps=true`, then retry |
| Images not loading in CRA (`npm start`) | Components reference `http://localhost:6006/assets/images/` — use Storybook instead |
| Storybook port 6006 in use | Kill the existing process or run `npx start-storybook -p 6007 -s public` |
| Design tab empty | Install `storybook-addon-designs` and verify `withDesign` decorator is on the story |
| Webpack 5 build warnings | Expected with Storybook 6 + CRA 5; project uses `@storybook/builder-webpack5` |

---

## Related Work

This repository supports the portfolio experience:

> *Custom marketing interface (Aug 2023): React + Storybook UI enabling 50+ clients to personalize campaigns efficiently.*

---

## Author

**Ahmad Alhalwany**

- GitHub: [@ahmad-alhalwany](https://github.com/ahmad-alhalwany)
- Portfolio: [ahmad-alhalwany.dev](https://ahmad-alhalwany.dev)

---

## License

This project is open source and available under the [MIT License](LICENSE).
