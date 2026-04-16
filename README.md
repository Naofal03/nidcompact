# NID Compact

A production-ready Next.js 16 blog site with daily AI-generated content powered by Google Gemini.

## Features

- **Next.js 16** with App Router and TypeScript
- **MDX blog** with frontmatter support via `gray-matter`
- **Tailwind CSS v4** with shadcn/ui design tokens
- **Framer Motion** animations
- **Daily content generation** via Google Gemini 1.5 Flash

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Content Generation

Set the `GEMINI_API_KEY` environment variable and run:

```bash
npx tsx scripts/generate-content.ts
```

This generates a new MDX post in `content/posts/` for today's date.

## GitHub Actions

- **CI** (`ci.yml`): Runs lint and build on every push/PR to `main`
- **Daily Content** (`daily-content.yml`): Generates a new post every day at 06:00 UTC (requires `GEMINI_API_KEY` secret)

## Deploy on Vercel

The easiest way to deploy is via the [Vercel Platform](https://vercel.com/new).

Add the `GEMINI_API_KEY` environment variable in your Vercel project settings and the GitHub Actions secret for daily content generation.
