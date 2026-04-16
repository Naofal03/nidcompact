import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { getPostBySlug, getPostSlugs } from '@/lib/mdx'
import { MDXContent } from '@/components/blog/MDXContent'
import { Badge } from '@/components/ui/badge'
import { FadeIn } from '@/components/animations/FadeIn'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug('selection', slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    openGraph: { title: post.title, description: post.description, images: post.image ? [post.image] : [] },
  }
}

export async function generateStaticParams() {
  return getPostSlugs('selection').map((slug) => ({ slug }))
}

export default async function SelectionPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug('selection', slug)
  if (!post) notFound()

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-navy-800 to-navy-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Link
              href="/selections"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-6 transition-colors"
            >
              <ArrowLeft size={16} />
              Retour aux sélections
            </Link>
            <Badge variant="selection" className="mb-4">Sélection</Badge>
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-slate-400 text-lg mb-6">{post.description}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {format(new Date(post.date), 'd MMMM yyyy', { locale: fr })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {post.readingTime}
              </span>
              <div className="flex items-center gap-1.5">
                <Tag size={14} />
                {post.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="bg-white/5 rounded px-2 py-0.5 text-xs">{tag}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeIn>
          <MDXContent source={post.content} />
        </FadeIn>
      </div>
    </div>
  )
}
