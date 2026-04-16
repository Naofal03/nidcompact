import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import type { Post, PostType } from '@/types/post'

const contentDir = path.join(process.cwd(), 'content')

const typeToDir: Record<PostType, string> = {
  guide: 'guides',
  inspiration: 'inspirations',
  selection: 'selections',
}

export function getPostSlugs(type: PostType): string[] {
  const dir = path.join(contentDir, typeToDir[type])
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

export function getPostBySlug(type: PostType, slug: string): Post | null {
  const dir = path.join(contentDir, typeToDir[type])
  const filePath = path.join(dir, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  const stats = readingTime(content)

  return {
    ...(data as Omit<Post, 'content' | 'readingTime' | 'wordCount'>),
    slug,
    type,
    content,
    readingTime: stats.text,
    wordCount: stats.words,
  }
}

export function getAllPosts(type: PostType): Post[] {
  const slugs = getPostSlugs(type)
  return slugs
    .map((slug) => getPostBySlug(type, slug))
    .filter((p): p is Post => p !== null && !p.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getAllPostsAllTypes(): Post[] {
  const types: PostType[] = ['guide', 'inspiration', 'selection']
  return types
    .flatMap((type) => getAllPosts(type))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getFeaturedPosts(limit = 6): Post[] {
  return getAllPostsAllTypes()
    .filter((p) => p.featured)
    .slice(0, limit)
}
