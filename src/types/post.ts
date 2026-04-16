export type PostType = 'guide' | 'inspiration' | 'selection'

export interface PostFrontmatter {
  title: string
  description: string
  date: string
  slug: string
  type: PostType
  tags: string[]
  image?: string
  featured?: boolean
  draft?: boolean
  affiliate?: boolean
}

export interface Post extends PostFrontmatter {
  content: string
  readingTime: string
  wordCount: number
}
