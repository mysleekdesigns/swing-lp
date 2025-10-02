# Swing - Modern Landing Page

A modern, sexy Next.js 14+ landing page with TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- Next.js 15.5.4 with App Router
- TypeScript for type safety
- Tailwind CSS with custom dark purple/magenta theme
- shadcn/ui components
- Framer Motion for animations
- Lucide React for icons
- next-themes for theme management
- Modern, sexy color palette with deep purples, magentas, and dark backgrounds

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
swing.com/
├── src/
│   ├── app/              # Next.js app router pages
│   │   ├── layout.tsx    # Root layout with theme provider
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   │   ├── ui/          # shadcn/ui components
│   │   └── theme-provider.tsx
│   ├── lib/             # Utility functions
│   │   └── utils.ts     # cn() helper for className merging
│   └── styles/          # Global styles
│       └── globals.css  # Tailwind CSS with custom theme
├── public/              # Static assets
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── next.config.ts       # Next.js configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Theme Colors

The project uses a modern, sexy color palette:

### Dark Mode (Default)
- Background: Deep purple-black (#1a0f1f)
- Primary: Vibrant purple (#a855f7)
- Secondary: Hot pink (#ec4899)
- Accent: Bright magenta (#f5a3ff)

## Technologies

- **Framework:** Next.js 15.5.4
- **Language:** TypeScript 5.9.3
- **Styling:** Tailwind CSS 4.1.14 (with @tailwindcss/postcss)
- **UI Components:** shadcn/ui components (Button, Card)
- **Animations:** Framer Motion 12.23.22
- **Icons:** Lucide React 0.544.0
- **Theme Management:** next-themes 0.4.6
- **Utilities:** clsx, tailwind-merge, class-variance-authority

## Note about tweakcn

The `tweakcn` package does not exist on npm. Instead, this project uses `next-themes` for robust theme management with the sexy dark purple/magenta color palette configured directly in Tailwind CSS.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
