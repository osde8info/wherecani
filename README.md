# Where Can I - Top Days Out in Surrey

A beautiful Next.js web application showcasing the top 10 days out in Surrey, England. This app is optimized for deployment on Vercel with a modern, responsive UI built with Tailwind CSS.

## Features

- **Top 10 Days Out**: Curated list of amazing attractions and activities in Surrey
- **Category Filtering**: Filter attractions by category (Gardens, Theme Parks, Historic Sites, etc.)
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Built with Tailwind CSS and React components
- **External Links**: Quick access to official websites for each attraction
- **Rating System**: Star ratings for each location

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: lucide-react
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd wherecani
```

1. Install dependencies:

```bash
npm install
```

1. Run the development server:

```bash
npm run dev
```

1. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production bundle
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## Deployment on Vercel

This app is optimized for deployment on Vercel.

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub/GitLab/Bitbucket
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and configure build settings
5. Click Deploy

### Option 2: Deploy via Vercel CLI

```bash
npm install -g vercel
vercel
```

## Project Structure

```text
wherecani/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   ├── components/
│   │   └── DayOutCard.tsx  # Card component for attractions
│   └── lib/
│       └── daysOut.ts      # Data and types
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## Data

The top 10 attractions are defined in [src/lib/daysOut.ts](src/lib/daysOut.ts). Each entry includes:

- Title and description
- Location in Surrey
- Category
- Star rating
- External URL
- Emoji icon

## Adding More Attractions

To add more days out to the application:

1. Edit [src/lib/daysOut.ts](src/lib/daysOut.ts)
2. Add a new object to the `topDaysOut` array
3. Include all required fields (id, title, description, location, image, rating, category, url)

## Customization

- **Colors**: Edit [tailwind.config.ts](tailwind.config.ts) to customize the color scheme
- **Content**: Update the data in [src/lib/daysOut.ts](src/lib/daysOut.ts)
- **Layout**: Modify [src/app/page.tsx](src/app/page.tsx) for layout changes

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.
