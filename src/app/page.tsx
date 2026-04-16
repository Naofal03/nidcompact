import Link from 'next/link'
import { ArrowRight, BookOpen, Sparkles, ShoppingBag } from 'lucide-react'
import { getAllPostsAllTypes, getFeaturedPosts } from '@/lib/mdx'
import { PostGrid } from '@/components/blog/PostGrid'
import { FadeIn } from '@/components/animations/FadeIn'
import { Button } from '@/components/ui/button'

export default function Home() {
  const featuredPosts = getFeaturedPosts(6)
  const latestPosts = getAllPostsAllTypes().slice(0, 6)

  const categories = [
    {
      href: '/guides',
      icon: BookOpen,
      label: 'Guides',
      description: 'Méthodes et conseils pour optimiser chaque centimètre carré',
      color: 'from-blue-600/20 to-blue-800/10 border-blue-500/20',
      iconColor: 'text-blue-400',
    },
    {
      href: '/inspirations',
      icon: Sparkles,
      label: 'Inspirations',
      description: 'Galeries de petits espaces réaménagés avec style',
      color: 'from-purple-600/20 to-purple-800/10 border-purple-500/20',
      iconColor: 'text-purple-400',
    },
    {
      href: '/selections',
      icon: ShoppingBag,
      label: 'Sélections',
      description: 'Les meilleurs produits pour gagner de la place',
      color: 'from-gold-400/20 to-gold-500/10 border-gold-400/20',
      iconColor: 'text-gold-400',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 pt-20 pb-24">
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gold-400/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-gold-400/10 border border-gold-400/20 rounded-full px-4 py-1.5 text-gold-400 text-sm font-medium mb-6">
              <Sparkles size={14} />
              Le magazine du petit espace
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
              Transformez votre{' '}
              <span className="gradient-text glow-gold-text">petit espace</span>
              <br />
              en grand confort
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              Guides pratiques, galeries d&apos;inspiration et sélections produits pour optimiser
              chaque centimètre carré de votre logement.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/guides">
                  Explorer les guides
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/inspirations">Voir les inspirations</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Category cards */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className={`group relative rounded-2xl bg-gradient-to-br border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] ${cat.color}`}
                >
                  <div className={`mb-4 ${cat.iconColor}`}>
                    <cat.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{cat.label}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{cat.description}</p>
                  <div className="flex items-center gap-1 mt-4 text-sm font-medium text-slate-400 group-hover:text-white transition-colors">
                    Découvrir <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Articles <span className="gradient-text">à la une</span>
                </h2>
              </div>
              <PostGrid posts={featuredPosts} />
            </FadeIn>
          </div>
        </section>
      )}

      {/* Latest posts */}
      <section className="py-16 bg-navy-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Derniers <span className="gradient-text">articles</span>
              </h2>
              <Button asChild variant="ghost">
                <Link href="/blog">
                  Tout voir <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
            <PostGrid posts={latestPosts} />
          </FadeIn>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-800 via-navy-900 to-navy-800" />
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, #f5c842 0%, transparent 60%)',
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Prêt à optimiser votre{' '}
              <span className="gradient-text">espace de vie</span> ?
            </h2>
            <p className="text-slate-400 mb-8">
              Explorez nos guides complets et trouvez les meilleures solutions pour votre logement.
            </p>
            <Button asChild size="lg">
              <Link href="/guides">
                Commencer maintenant <ArrowRight size={18} />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
