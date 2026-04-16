import type { Metadata } from 'next'
import { getAllPostsAllTypes } from '@/lib/mdx'
import { PostGrid } from '@/components/blog/PostGrid'
import { FadeIn } from '@/components/animations/FadeIn'

export const metadata: Metadata = {
  title: 'Tous les articles',
  description: 'Tous nos guides, inspirations et sélections produits pour l\'optimisation de petits espaces.',
}

export default function BlogPage() {
  const posts = getAllPostsAllTypes()

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-navy-800 to-navy-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              Tous les articles
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl">
              Guides, inspirations et sélections produits — toute notre expertise pour votre petit espace.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeIn>
          <PostGrid posts={posts} />
        </FadeIn>
      </div>
    </div>
  )
}
