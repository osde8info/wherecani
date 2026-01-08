# AI Coding Guidelines for Where Can I

## Project Overview

This is a Next.js 15 application showcasing top days out in Surrey, England. It uses the App Router with client-side filtering and a card-based UI.

## Architecture

- **Framework**: Next.js 15 with App Router (`src/app/`)
- **Styling**: Tailwind CSS with responsive grid layouts
- **Data**: Hardcoded in `src/lib/daysOut.ts` as `DayOut[]` interface
- **Components**: Reusable React components in `src/components/`
- **Icons**: lucide-react for consistent iconography

## Key Patterns

- **Client Components**: Use `"use client"` for interactive features (filtering, state)
- **Data Structure**: Each day out has `id`, `title`, `description`, `image` (emoji), `location`, `rating`, `category`, `url`
- **Filtering**: Derive categories dynamically from data: `Array.from(new Set(topDaysOut.map(item => item.category)))`
- **Card Layout**: Full-height cards with emoji header, category badge, content, and CTA button
- **Path Aliases**: Import from `@/lib/...` or `@/components/...`

## Development Workflow

- **Start Dev**: `npm run dev` (serves on localhost:3000)
- **Build**: `npm run build` (Vercel-optimized)
- **Lint**: `npm run lint` (ESLint with Next.js config)
- **GA Integration**: Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` for analytics

## Code Examples

- **Adding New Day Out**: Append to `topDaysOut` array in `src/lib/daysOut.ts`
- **New Category**: Automatically appears in filter buttons via Set derivation
- **Component Props**: `<DayOutCard dayOut={dayOut} />` expects full `DayOut` object
- **Styling**: Use Tailwind classes like `bg-gradient-to-r from-blue-600 to-blue-800` for headers

## Conventions

- **TypeScript**: Strict mode enabled, no unused locals/parameters
- **Responsive**: Mobile-first with `md:` and `lg:` breakpoints
- **External Links**: Use `target="_blank" rel="noopener noreferrer"` for safety
- **Ratings**: Display as `<Star className="fill-yellow-400" /> {rating}`

## Deployment

Optimized for Vercel with `vercel.json` config. Ensure environment variables are set in Vercel dashboard.
