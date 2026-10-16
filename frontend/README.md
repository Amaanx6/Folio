# Folio - Frontend Application

A single, unified Next.js (App Router) web application built with TypeScript and Tailwind CSS v4.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with PostCSS (`@tailwindcss/postcss`)
- **Language**: TypeScript
- **Package Manager**: pnpm

## Directory Structure

```
frontend/
├── public/                 # Static assets (images, fonts)
├── src/
│   ├── app/                # Next.js App Router routes & pages
│   │   ├── (auth)/         # Authentication routes
│   │   ├── (dashboard)/    # Authenticated user dashboard
│   │   ├── (marketing)/    # Public landing/marketing pages
│   │   ├── api/            # API route handlers
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home landing page
│   ├── components/         # Shared components
│   │   ├── layout/         # Header, footer, shell, navigation
│   │   ├── providers/      # Context and query providers
│   │   └── ui/             # Core UI primitives (buttons, dialogs, etc.)
│   ├── features/           # Domain/feature modules (auth, billing, etc.)
│   ├── hooks/              # Global custom React hooks
│   ├── lib/                # Utilities and client configurations
│   ├── stores/             # Global client state management
│   ├── styles/             # Global CSS and Tailwind v4 theme definitions
│   └── types/              # TypeScript types & interfaces
├── next.config.mjs         # Next.js configuration
├── postcss.config.mjs      # PostCSS configuration for Tailwind CSS v4
├── tsconfig.json           # TypeScript configuration with @/* alias
└── package.json            # Scripts & dependencies
```

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Run the development server:
   ```bash
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.
