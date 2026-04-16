import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AnimatedSection } from "@/components/animated-section";
import Link from "next/link";

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return {
      title: `${post.title} | NID Compact`,
      description: post.excerpt,
    };
  } catch {
    return { title: "Post Not Found" };
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <main className="container mx-auto max-w-3xl px-4 py-16">
      <AnimatedSection>
        <Link
          href="/blog"
          className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block"
        >
          ← Back to Blog
        </Link>

        <div className="mb-4">
          <Badge variant="secondary">{post.date}</Badge>
        </div>

        <h1 className="text-4xl font-bold tracking-tight mb-4">{post.title}</h1>
        <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>

        <Separator className="mb-8" />

        <article className="prose prose-slate dark:prose-invert max-w-none">
          <MDXRemote source={post.content} />
        </article>
      </AnimatedSection>
    </main>
  );
}
