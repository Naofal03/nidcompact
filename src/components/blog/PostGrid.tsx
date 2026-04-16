import { PostCard } from './PostCard'
import type { Post } from '@/types/post'

interface PostGridProps {
  posts: Post[]
  title?: string
}

export function PostGrid({ posts, title }: PostGridProps) {
  if (!posts.length) {
    return (
      <div className="text-center py-20 text-slate-500">
        <p className="text-lg">Aucun article pour l&apos;instant.</p>
      </div>
    )
  }

  return (
    <section>
      {title && (
        <h2 className="text-2xl font-bold text-white mb-6">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <PostCard key={post.slug} post={post} featured={i === 0 && posts.length > 2} />
        ))}
      </div>
    </section>
  )
}
