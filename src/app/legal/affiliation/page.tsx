import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique d\'affiliation',
  robots: { index: false },
}

export default function AffiliationPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-black text-white mb-8">Politique d&apos;affiliation</h1>

      <div className="space-y-8 text-slate-400 leading-relaxed">
        <div className="bg-gold-400/10 border border-gold-400/20 rounded-xl p-5 text-slate-300">
          <p className="font-semibold text-gold-400 mb-2">Notre engagement de transparence</p>
          <p>
            Chez NidCompact, la transparence est une valeur fondamentale. Cette page explique comment
            fonctionne notre modèle de financement par affiliation.
          </p>
        </div>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">Qu&apos;est-ce que l&apos;affiliation ?</h2>
          <p>
            Certains liens présents sur NidCompact sont des liens d&apos;affiliation. Lorsque vous cliquez
            sur ces liens et effectuez un achat, nous percevons une commission de la part du marchand.
            Cette commission ne vous coûte rien — le prix que vous payez est identique.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">Nos partenaires</h2>
          <p>
            Nous participons à des programmes d&apos;affiliation, notamment :
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
            <li>Amazon Partenaires (Amazon Associates)</li>
            <li>Programmes d&apos;affiliation de marchands spécialisés en rangement</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">Notre indépendance éditoriale</h2>
          <p>
            Les partenariats d&apos;affiliation n&apos;influencent jamais nos recommandations. Nous sélectionnons
            et testons les produits indépendamment, puis mettons en place des liens d&apos;affiliation uniquement
            pour les produits que nous recommandons sincèrement.
          </p>
          <p className="mt-2">
            Si un produit ne mérite pas notre recommandation, nous ne l&apos;incluons pas, même si nous
            pourrions percevoir une commission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">Identification des liens affiliés</h2>
          <p>
            Les articles contenant des liens d&apos;affiliation sont systématiquement signalés par une
            mention en début d&apos;article. Tout lien vers un produit avec lequel nous avons un accord
            commercial est identifié.
          </p>
        </section>

        <p className="text-sm text-slate-500">Dernière mise à jour : janvier 2025</p>
      </div>
    </div>
  )
}
