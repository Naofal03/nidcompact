import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { HoverCard } from '@/components/animations/HoverCard'
import type { Post } from '@/types/post'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'

const typeLabels: Record<string, string> = {
  guide: 'Guide',
  inspiration: 'Inspiration',
  selection: 'Sélection',
}

const typeHrefs: Record<string, string> = {
  guide: 'guides',
  inspiration: 'inspirations',
  selection: 'selections',
}

interface PostCardProps {
  post: Post
  featured?: boolean
}

export function PostCard({ post, featured = false }: PostCardProps) {
  const href = `/${typeHrefs[post.type]}/${post.slug}`

  return (
    <HoverCard>
      <Link href={href} className="block h-full">
        <article
          className={`relative h-full rounded-xl overflow-hidden bg-navy-800 border border-white/5 card-shine transition-all duration-300 ${
            featured ? 'md:col-span-2' : ''
          }`}
        >
          {/* Image placeholder / gradient */}
          <div
            className={`relative overflow-hidden ${featured ? 'aspect-[16/7]' : 'aspect-[16/9]'}`}
          >
            {post.image ? (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 flex items-center justify-center">
                <span className="text-4xl opacity-20">
                  {post.type === 'guide' ? '📚' : post.type === 'inspiration' ? '✨' : '🛍️'}
                </span>
              </div>
            )}
            {/* Gold gradient overlay bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />

            {/* Badge */}
            <div className="absolute top-3 left-3">
              <Badge variant={post.type as 'guide' | 'inspiration' | 'selection'}>
                {typeLabels[post.type]}
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3
              className={`font-bold text-white leading-tight mb-2 line-clamp-2 ${
                featured ? 'text-xl md:text-2xl' : 'text-lg'
              }`}
            >
              {post.title}
            </h3>
            <p className="text-slate-400 text-sm line-clamp-2 mb-4">{post.description}</p>

            {/* Meta */}
            <div className="flex items-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <Calendar size={12} />
                {format(new Date(post.date), 'd MMM yyyy', { locale: fr })}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {post.readingTime}
              </span>
            </div>
          </div>
        </article>
      </Link>
    </HoverCard>
  )
}
