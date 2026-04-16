import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/mdx'
import { PostGrid } from '@/components/blog/PostGrid'
import { FadeIn } from '@/components/animations/FadeIn'
import { ShoppingBag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sélections Produits Rangement',
  description:
    'Comparatifs et sélections des meilleurs produits pour optimiser le rangement de votre petit espace.',
}

export default function SelectionsPage() {
  const posts = getAllPosts('selection')

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-navy-800 to-navy-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gold-400/20 rounded-xl p-2">
                <ShoppingBag className="text-gold-400" size={24} />
              </div>
              <span className="text-gold-400 text-sm font-semibold uppercase tracking-wider">
                Sélections
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              Sélections produits
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl">
              Les meilleurs produits de rangement testés et sélectionnés pour vous. Comparatifs
              honnêtes et recommandations personnalisées selon votre budget.
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
