import { getAllPostsAllTypes } from '@/lib/mdx'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://nidcompact.fr'

export async function GET() {
  const posts = getAllPostsAllTypes()

  const typeToPath: Record<string, string> = {
    guide: 'guides',
    inspiration: 'inspirations',
    selection: 'selections',
  }

  const rssItems = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>${SITE_URL}/${typeToPath[post.type]}/${post.slug}</link>
      <guid>${SITE_URL}/${typeToPath[post.type]}/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <category>${post.type}</category>
    </item>`
    )
    .join('')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>NidCompact – Rangement &amp; Organisation Petits Espaces</title>
    <description>Guides, inspirations et sélections produits pour optimiser votre petit espace.</description>
    <link>${SITE_URL}</link>
    <atom:link href="${SITE_URL}/rss" rel="self" type="application/rss+xml"/>
    <language>fr-FR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${rssItems}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
