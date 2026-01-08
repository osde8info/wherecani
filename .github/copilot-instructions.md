# Copilot Instructions for Where Can I

## Project Overview

A curated guide to the top 10 days out in Surrey, built as a Next.js 15 web application. The app features category filtering, responsive design with Tailwind CSS, and integration with Google Analytics for deployment tracking.

## Architecture

**Client-First Approach**: All interactive components are marked `"use client"` (pages, components). This is a fully client-side rendered app with no API routes or server actions.

**Data Structure**:
- **Single source of truth**: `src/lib/daysOut.ts` defines the `DayOut` interface and `topDaysOut` array with all 10 attractions
- **Static data**: Content is hardcoded (no database); to add/modify attractions, edit the `topDaysOut` array directly
- Each item has: id, title, description, category, location, rating (0-5), emoji image, and optional external URL

**Component Architecture**:
- **Home page** (`src/app/page.tsx`): Handles filtering state and grid layout. Derives categories dynamically from the data using `Set`
- **DayOutCard** (`src/components/DayOutCard.tsx`): Reusable card component using lucide-react icons for location/rating display
- **Styling**: Tailwind CSS with predefined gradients and hover states; no custom CSS modules needed

## Key Patterns & Conventions

**Type Safety**: 
- TypeScript strict mode enabled; interfaces defined in `src/lib/daysOut.ts`
- Use `@/` path alias for imports (e.g., `import { DayOut } from "@/lib/daysOut"`)

**Filtering Logic**:
- Computed on client; categories extracted dynamically from data to stay in sync
- All attractions shown when `selectedCategory === null`

**Icons & Images**:
- Text emoji characters used for visual representation (e.g., `🌺`, `🎢`, `🏔️`)
- Lucide React icons (`Star`, `MapPin`, `ExternalLink`) for UI controls

**Analytics Integration**:
- Optional Google Analytics via `NEXT_PUBLIC_GA_MEASUREMENT_ID` environment variable
- Wrapper function in `src/lib/analytics.ts` safely checks for `window.gtag` availability

## Development Workflow

**Commands**:
- `npm run dev` – Start development server (http://localhost:3000)
- `npm run build` – Production build
- `npm run start` – Run production server
- `npm run lint` – Run ESLint

**Environment Variables**:
- `.env` file (local, not tracked): Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` for Google Analytics

**Deployment**:
- Vercel-ready (see `vercel.json`); no special config needed
- Analytics ID passed via Vercel environment variables in production

## Adding New Attractions

1. Open `src/lib/daysOut.ts`
2. Add new object to `topDaysOut` array with all required `DayOut` fields
3. Choose appropriate category (Gardens, Theme Park & Zoo, Nature & Hiking, etc.) – filtering derives categories from these values
4. Ensure rating is 0-5, URL is optional, emoji is a single character

Example:
```typescript
{
  id: 11,
  title: "New Attraction Name",
  description: "Brief description",
  location: "Town, Area",
  image: "🏛️",
  rating: 4.5,
  category: "Existing or New Category",
  url: "https://example.com"
}
```

## Important Notes

- **No API routes** – this is entirely client-rendered; all data lives in the source code
- **CSS is Tailwind only** – avoid custom CSS; if styling issues arise, check `tailwind.config.ts` and Tailwind documentation
- **Test on mobile** – responsive grid uses `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`; visually verify on devices
- **Empty state handling** – filter UI shows message when no attractions match selected category (already implemented)
