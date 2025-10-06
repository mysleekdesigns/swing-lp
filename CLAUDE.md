# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Modern landing page for Swing.com (transitioning from Swinglifestyle.com) built with Next.js 15, TypeScript, and Tailwind CSS v4. Features a dark-themed design with vibrant purple/magenta accents and animated UI components.

## Development Commands

### Running the Application
```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Production build (note: uses NODE_ENV= to clear env)
npm start            # Start production server
npm run lint         # Run ESLint
```

### Important Build Note
The build command uses `NODE_ENV= next build` (with empty NODE_ENV) to avoid build issues. Do not modify this.

## Architecture

### Tech Stack
- **Framework**: Next.js 15.5.4 with App Router
- **Language**: TypeScript 5.9.3 (strict mode enabled)
- **Styling**: Tailwind CSS v4 (using new @tailwindcss/postcss)
- **UI Components**: shadcn/ui components with Radix UI primitives
- **Animations**: Framer Motion 12.23.22
- **Icons**: Lucide React
- **Theme**: next-themes (dark mode by default)

### Project Structure
```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with ThemeProvider and Inter font
│   └── page.tsx           # Home page (composed of sections)
├── components/
│   ├── ui/                # shadcn/ui components (Button, Card, Input, etc.)
│   ├── features/          # Feature components (LoginCard, StatCard)
│   ├── sections/          # Page sections (HeroSection, StatsSection, etc.)
│   ├── layout/            # Layout components (Footer)
│   ├── animations/        # Animation variants
│   └── theme-provider.tsx # Theme provider wrapper
├── lib/
│   ├── utils.ts           # cn() helper for className merging
│   └── animations.ts      # Animation hooks and utilities
└── styles/
    └── globals.css        # Tailwind CSS with custom theme variables
```

### TypeScript Configuration
- Path alias: `@/*` maps to `./src/*`
- Target: ES2017
- Strict mode enabled
- Module resolution: bundler

### Styling System

**Color Palette**: The theme uses OKLCH color format with custom CSS variables defined in `globals.css`:
- Primary: Vibrant purple (`oklch(0.7686 0.1647 70.0804)`)
- Accent: Bright orange/yellow (`oklch(0.4732 0.1247 46.2007)`)
- Background (dark): Deep dark (`oklch(0.2046 0 0)`)

**Theme Variables**: Defined in `:root` and `.dark` selectors in `globals.css`, then mapped via `@theme inline` directive. Components use Tailwind utility classes (e.g., `bg-primary`, `text-accent`).

### Animation System

Located in `src/lib/animations.ts`:
- **Hooks**:
  - `useReducedMotion()`: Respects user motion preferences
  - `useCountUp()`: Animated counter with easing
  - `useScrollAnimation()`: Scroll-triggered animations
  - `useParallax()`: Parallax scroll effects
  - `useMousePosition()`: Mouse tracking

- **Presets**:
  - `timings`: Duration presets (fast, normal, slow, slower)
  - `springs`: Spring physics configs (soft, default, snappy, gentle, bouncy)
  - `easings`: Bezier curves for transitions
  - `stagger`: Stagger timing for sequential animations

### Component Patterns

**Section Components**: Located in `src/components/sections/`, each section is a self-contained module (HeroSection, StatsSection, BrandStorySection, CTASection).

**UI Components**: shadcn/ui components in `src/components/ui/` follow the shadcn pattern with CVA for variants and the `cn()` utility for className composition.

**Client Components**: Most components use `'use client'` directive due to Framer Motion animations and interactive features.

### Key Files

- `src/app/layout.tsx`: Configures theme provider, metadata, and Inter font
- `src/app/page.tsx`: Composes sections into the landing page
- `src/styles/globals.css`: Theme variables and Tailwind configuration
- `src/lib/utils.ts`: Essential `cn()` utility for merging Tailwind classes
- `src/lib/animations.ts`: Centralized animation system

## shadcn/ui Integration

Add new components:
```bash
npx shadcn@latest add <component-name>
```

Components are installed to `src/components/ui/` with proper path aliases configured.

## Notes

- Project defaults to dark mode (configured in layout.tsx)
- Uses Tailwind CSS v4 with new `@tailwindcss/postcss` plugin
- Theme management via next-themes (not the non-existent "tweakcn" package mentioned in README)
- All animations respect `prefers-reduced-motion` via the `useReducedMotion` hook
- i always want the project manager to delegate the work to the appropraite sub agents
- when the sub agents are done they inform the project manager
- after a task is completed the run npm run build and fix any errors