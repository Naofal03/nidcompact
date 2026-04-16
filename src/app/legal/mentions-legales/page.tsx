import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales',
  robots: { index: false },
}

export default function MentionsLegalesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-black text-white mb-8">Mentions légales</h1>

      <div className="space-y-8 text-slate-400 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-white mb-3">Éditeur du site</h2>
          <p>
            NidCompact est un site de contenus éditoriaux sur le rangement et l&apos;organisation des petits espaces.
          </p>
          <p className="mt-2">
            Contact : <a href="mailto:contact@nidcompact.fr" className="text-gold-400 hover:underline">contact@nidcompact.fr</a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">Hébergement</h2>
          <p>
            Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus présents sur ce site (textes, images, graphismes) est protégé par le droit d&apos;auteur.
            Toute reproduction, même partielle, est soumise à autorisation préalable.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">Responsabilité</h2>
          <p>
            NidCompact s&apos;efforce de fournir des informations exactes et à jour. Cependant, nous ne pouvons garantir
            l&apos;exactitude, la complétude ou l&apos;actualité des informations diffusées sur ce site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">Liens externes</h2>
          <p>
            Ce site contient des liens vers des sites tiers. NidCompact n&apos;est pas responsable du contenu de ces sites
            et ne peut être tenu pour responsable des dommages résultant de leur consultation.
          </p>
        </section>
      </div>
    </div>
  )
}
