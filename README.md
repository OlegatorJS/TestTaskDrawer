# Zeely SideBar

## Quick Start

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm dev
```

The application will be available at: `http://localhost:5173`

### Build for Production
```bash
npm build
```

### Preview Production Build
```bash
npm preview
```

### Deploy to GitHub Pages
```bash
npm deploy
```

## Tech Stack

- **React 19** — UI library
- **TypeScript 5** — type safety
- **Vite 7** — build tool and dev server
- **Tailwind CSS 4** — utility-first styling
- **Radix UI** — accessible UI primitives (Dialog, Slot)
- **Vaul** — drawer component
- **CVA** — component variant management
- **ESLint + Prettier** — linting and formatting

## Project Structure

```
src/
├── App.tsx                        # Main application component
├── main.tsx                       # Entry point
├── index.css                      # Global styles and Tailwind theme
│
├── assets/                        # Static assets
│   ├── images/                    # SVG icons and background images
│   └── styles/                    # Font definitions
│
├── components/                    # Reusable UI components
│   └── ui/
│       ├── Button/                # Button with CVA variants
│       ├── Drawer/                # Drawer (based on Vaul)
│       ├── InputGroup/            # Input group with textarea and addons
│       ├── Spinner/               # Loading spinner
│       ├── Textarea/              # Textarea component
│       └── Typography/            # Typography component
│
├── features/                      # Feature modules
│   └── background-generation/     # Background generation feature
│       ├── components/            # Feature-specific components
│       ├── hooks/                 # Custom hooks (useBackgrounds)
│       ├── services/              # Service interface and mock implementation
│       └── types.ts               # Feature-specific types
│
└── lib/                           # Shared utilities and constants
    ├── constants.ts               # App-wide constants
    ├── types.ts                   # Shared types (LoadingStatus)
    └── utils/                     # Utility functions (cn, delay)
```

## Architecture

- **Feature-based structure** — each feature is a self-contained module with its own components, hooks, services, and types
- **Service pattern** — abstract service interfaces with mock implementations for easy swapping
- **Composable UI** — reusable components built on Radix UI primitives with Tailwind styling
- **Path aliases** — `@/*` maps to `src/*` for clean imports
