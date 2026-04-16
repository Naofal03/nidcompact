import Link from 'next/link'

const footerLinks = {
  contenu: [
    { href: '/guides', label: 'Guides' },
    { href: '/inspirations', label: 'Inspirations' },
    { href: '/selections', label: 'Sélections' },
    { href: '/blog', label: 'Tous les articles' },
  ],
  legal: [
    { href: '/legal/mentions-legales', label: 'Mentions légales' },
    { href: '/legal/politique-confidentialite', label: 'Politique de confidentialité' },
    { href: '/legal/cookies', label: 'Cookies' },
    { href: '/legal/affiliation', label: 'Politique d\'affiliation' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-white/5 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-3">
              <span className="text-2xl font-black tracking-tight">
                <span className="gradient-text">Nid</span>
                <span className="text-white">Compact</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Le magazine de référence pour optimiser vos petits espaces. Guides, inspirations et sélections produits.
            </p>
          </div>

          {/* Contenu */}
          <div>
            <h3 className="text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Contenu
            </h3>
            <ul className="space-y-2">
              {footerLinks.contenu.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className="text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Informations légales
            </h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} NidCompact. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/rss" className="text-slate-500 text-xs hover:text-gold-400 transition-colors">
              RSS
            </Link>
            <Link href="/sitemap.xml" className="text-slate-500 text-xs hover:text-gold-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
