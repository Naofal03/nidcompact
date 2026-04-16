import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";
import { getAllPosts } from "@/lib/mdx";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <main className="container mx-auto max-w-5xl px-4 py-16">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            NID Compact
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Daily AI-powered insights on artificial intelligence, technology, and
            the future. Fresh content every morning.
          </p>
          <Button asChild size="lg">
            <Link href="/blog">Read the Blog</Link>
          </Button>
        </div>
      </AnimatedSection>

      {recentPosts.length > 0 && (
        <AnimatedSection delay={0.2}>
          <h2 className="text-2xl font-semibold mb-6">Recent Posts</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {recentPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <p className="text-xs text-muted-foreground">{post.date}</p>
                    <CardTitle className="text-base">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </AnimatedSection>
      )}
    </main>
  );
}
