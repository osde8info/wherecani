# AI Coding Guidelines for Where Can I

## Project Overview

A Next.js 15 application showcasing top days out in Surrey. Single-page app with client-side filtering and responsive card layout. Deployed on Vercel.

## Core Architecture

**Data Flow**: `src/lib/daysOut.ts` (hardcoded `DayOut[]`) → `src/app/page.tsx` (client filtering) → `src/components/DayOutCard.tsx` (display)

**Key Decision**: Client-side filtering with derived categories keeps implementation simple. Add server-side filtering only if data grows beyond ~50 items.

**Component Hierarchy**:
- `page.tsx`: Client component managing filter state, rendering categories dynamically, grid layout
- `DayOutCard`: Presentational, displays individual day out with emoji header, metadata, CTA

## Data Structure & Patterns

**`DayOut` Interface** (`src/lib/daysOut.ts`):
```typescript
{ id, title, description, image (emoji), location, rating, category, url? }
```

**Critical Pattern - Dynamic Categories**: Categories derived at runtime via `Array.from(new Set(topDaysOut.map(item => item.category)))`. Never hardcode category lists. Filter buttons auto-generate from data.

**Adding Content**: Append to `topDaysOut` array—category auto-appears in UI. URL is optional for safety.

## Development Commands

```bash
npm run dev      # localhost:3000 with hot reload
npm run build    # Vercel-optimized production build
npm run lint     # ESLint validation (enforces strict TS)
```

## Code Conventions

- **Client Components**: Mark interactive features with `"use client"` (filtering state, event handlers)
- **TypeScript**: Strict mode enforced—no unused variables/params
- **Path Aliases**: Use `@/lib/*` and `@/components/*` (configured in `tsconfig.json`)
- **Responsive**: Mobile-first breakpoints: `md:` (768px), `lg:` (1024px)
- **Styling**: Tailwind classes. Gradients: `bg-gradient-to-r from-blue-600 to-blue-800`. Star rating: `<Star className="fill-yellow-400" />`
- **External Links**: Always include `target="_blank" rel="noopener noreferrer"` for XSS safety
- **Empty States**: Show "No results found" when filtered data is empty (see `page.tsx` line ~72)

## Analytics Integration

Google Analytics optional via `NEXT_PUBLIC_GA_MEASUREMENT_ID` env var. Configured in `layout.tsx` with `afterInteractive` script strategy. Omit env var to disable.

## File Purposes

- `src/app/page.tsx`: Main UI, filtering logic (89 lines)
- `src/components/DayOutCard.tsx`: Card component with emoji header, category badge, location, rating, CTA (58 lines)
- `src/lib/daysOut.ts`: Data definitions (114 lines, 10 entries)
- `tailwind.config.ts`: TW customization (minimal)
- `tsconfig.json`: Path aliases (`@/*`), strict mode, strict null checks enabled

## Deployment

Vercel-optimized via `next.config.ts` with `reactStrictMode: true`. Environment variables set in Vercel dashboard. No special build config needed.
