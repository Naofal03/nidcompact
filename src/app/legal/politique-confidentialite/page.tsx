import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  robots: { index: false },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-black text-white mb-8">Politique de confidentialité</h1>

      <div className="space-y-8 text-slate-400 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-white mb-3">Collecte de données</h2>
          <p>
            NidCompact ne collecte aucune donnée personnelle identifiable sans votre consentement explicite.
            Nous pouvons collecter des données analytiques anonymisées pour améliorer l&apos;expérience utilisateur.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">Cookies</h2>
          <p>
            Nous utilisons des cookies techniques nécessaires au fonctionnement du site et, avec votre consentement,
            des cookies analytiques. Consultez notre <a href="/legal/cookies" className="text-gold-400 hover:underline">politique cookies</a> pour
            plus d&apos;informations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">Partage des données</h2>
          <p>
            Vos données ne sont jamais vendues ni partagées avec des tiers à des fins commerciales.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">Vos droits (RGPD)</h2>
          <p>
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement
            et de portabilité de vos données. Pour exercer ces droits, contactez-nous à{' '}
            <a href="mailto:privacy@nidcompact.fr" className="text-gold-400 hover:underline">privacy@nidcompact.fr</a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">Conservation des données</h2>
          <p>
            Les données collectées sont conservées pendant une durée maximale de 13 mois pour les cookies
            analytiques.
          </p>
        </section>

        <p className="text-sm text-slate-500">Dernière mise à jour : janvier 2025</p>
      </div>
    </div>
  )
}
