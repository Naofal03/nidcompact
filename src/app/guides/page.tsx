import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/mdx'
import { PostGrid } from '@/components/blog/PostGrid'
import { FadeIn } from '@/components/animations/FadeIn'
import { BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Guides Rangement',
  description:
    'Guides pratiques et conseils experts pour optimiser le rangement de votre petit espace.',
}

export default function GuidesPage() {
  const posts = getAllPosts('guide')

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-b from-navy-800 to-navy-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-500/20 rounded-xl p-2">
                <BookOpen className="text-blue-400" size={24} />
              </div>
              <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
                Guides
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              Guides rangement
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl">
              Méthodes éprouvées, conseils d&apos;experts et tutoriels pas à pas pour transformer
              votre petit espace en lieu de vie optimal.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeIn>
          <PostGrid posts={posts} />
        </FadeIn>
      </div>
    </div>
  )
}
