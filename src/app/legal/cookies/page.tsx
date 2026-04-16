import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de cookies',
  robots: { index: false },
}

export default function CookiesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-black text-white mb-8">Politique de cookies</h1>

      <div className="space-y-8 text-slate-400 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-white mb-3">Qu&apos;est-ce qu&apos;un cookie ?</h2>
          <p>
            Un cookie est un petit fichier texte stocké sur votre appareil lors de la visite d&apos;un site web.
            Il permet au site de mémoriser vos préférences et d&apos;améliorer votre expérience.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">Cookies utilisés</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse mt-4">
              <thead>
                <tr>
                  <th className="bg-navy-800 text-gold-400 text-left px-4 py-2 border border-white/10">Cookie</th>
                  <th className="bg-navy-800 text-gold-400 text-left px-4 py-2 border border-white/10">Type</th>
                  <th className="bg-navy-800 text-gold-400 text-left px-4 py-2 border border-white/10">Durée</th>
                  <th className="bg-navy-800 text-gold-400 text-left px-4 py-2 border border-white/10">Finalité</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border border-white/5 text-slate-300">session</td>
                  <td className="px-4 py-2 border border-white/5">Technique</td>
                  <td className="px-4 py-2 border border-white/5">Session</td>
                  <td className="px-4 py-2 border border-white/5">Fonctionnement du site</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-white/5 text-slate-300">_ga</td>
                  <td className="px-4 py-2 border border-white/5">Analytique</td>
                  <td className="px-4 py-2 border border-white/5">13 mois</td>
                  <td className="px-4 py-2 border border-white/5">Mesure d&apos;audience anonymisée</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">Gérer vos cookies</h2>
          <p>
            Vous pouvez configurer votre navigateur pour refuser les cookies ou être alerté lorsqu&apos;un cookie
            est envoyé. La désactivation des cookies peut affecter certaines fonctionnalités du site.
          </p>
        </section>
      </div>
    </div>
  )
}
