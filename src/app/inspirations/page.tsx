import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/mdx'
import { PostGrid } from '@/components/blog/PostGrid'
import { FadeIn } from '@/components/animations/FadeIn'
import { Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Inspirations Petits Espaces',
  description:
    'Galeries d\'inspiration et idées déco pour aménager votre studio ou petit appartement avec style.',
}

export default function InspirationsPage() {
  const posts = getAllPosts('inspiration')

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-navy-800 to-navy-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-500/20 rounded-xl p-2">
                <Sparkles className="text-purple-400" size={24} />
              </div>
              <span className="text-purple-400 text-sm font-semibold uppercase tracking-wider">
                Inspirations
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              Inspirations & idées déco
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl">
              Découvrez des petits espaces réaménagés avec ingéniosité et style. Des galeries qui
              prouvent que la taille ne limite pas le confort.
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
