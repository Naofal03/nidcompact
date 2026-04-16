import type { MetadataRoute } from 'next'
import { getAllPostsAllTypes } from '@/lib/mdx'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://nidcompact.fr'

const typeToPath: Record<string, string> = {
  guide: 'guides',
  inspiration: 'inspirations',
  selection: 'selections',
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPostsAllTypes()

  const postUrls = posts.map((post) => ({
    url: `${SITE_URL}/${typeToPath[post.type]}/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const staticUrls: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${SITE_URL}/guides`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/inspirations`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/selections`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
  ]

  return [...staticUrls, ...postUrls]
}
