import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/animated-section";

export const metadata = {
  title: "Blog | NID Compact",
  description: "Latest articles on AI trends and technology.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="container mx-auto max-w-4xl px-4 py-16">
      <AnimatedSection>
        <h1 className="text-4xl font-bold tracking-tight mb-2">Blog</h1>
        <p className="text-muted-foreground mb-10 text-lg">
          Daily AI-generated insights on artificial intelligence and technology.
        </p>
      </AnimatedSection>

      <div className="grid gap-6">
        {posts.map((post, i) => (
          <AnimatedSection key={post.slug} delay={i * 0.1}>
            <Link href={`/blog/${post.slug}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="secondary">{post.date}</Badge>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
              </Card>
            </Link>
          </AnimatedSection>
        ))}

        {posts.length === 0 && (
          <p className="text-muted-foreground text-center py-12">
            No posts yet. Check back soon!
          </p>
        )}
      </div>
    </main>
  );
}
