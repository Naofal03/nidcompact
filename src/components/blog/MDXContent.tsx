import { MDXRemote } from 'next-mdx-remote/rsc'
import { InfoIcon, AlertTriangle } from 'lucide-react'

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-3xl md:text-4xl font-black text-white mt-8 mb-4" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl font-semibold text-gold-400 mt-8 mb-3" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-slate-300 leading-relaxed mb-4" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-gold-400 hover:text-gold-300 underline underline-offset-2 transition-colors"
      target={props.href?.startsWith('http') ? '_blank' : undefined}
      rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside text-slate-300 space-y-1 mb-4 ml-4" {...props} />
  ),
  ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside text-slate-300 space-y-1 mb-4 ml-4" {...props} />
  ),
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className="text-slate-300 leading-relaxed" {...props} />
  ),
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-gold-400 pl-4 italic text-slate-400 my-6"
      {...props}
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="bg-navy-800 text-gold-300 rounded px-1.5 py-0.5 text-sm font-mono"
      {...props}
    />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="bg-navy-800 rounded-xl p-4 overflow-x-auto text-sm font-mono text-slate-300 my-6 border border-white/5"
      {...props}
    />
  ),
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full text-sm border-collapse" {...props} />
    </div>
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th
      className="bg-navy-800 text-gold-400 font-semibold text-left px-4 py-3 border border-white/10"
      {...props}
    />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td
      className="text-slate-300 px-4 py-3 border border-white/5 hover:bg-navy-800/50 transition-colors"
      {...props}
    />
  ),
  Callout: ({
    children,
    type = 'info',
  }: {
    children: React.ReactNode
    type?: 'info' | 'warning'
  }) => (
    <div
      className={`flex gap-3 p-4 rounded-xl my-6 ${
        type === 'warning'
          ? 'bg-amber-500/10 border border-amber-500/20'
          : 'bg-blue-500/10 border border-blue-500/20'
      }`}
    >
      {type === 'warning' ? (
        <AlertTriangle className="text-amber-400 shrink-0 mt-0.5" size={18} />
      ) : (
        <InfoIcon className="text-blue-400 shrink-0 mt-0.5" size={18} />
      )}
      <div className="text-sm text-slate-300">{children}</div>
    </div>
  ),
  AffiliateDisclaimer: () => (
    <div className="bg-gold-400/10 border border-gold-400/20 rounded-xl p-4 my-6 text-sm text-slate-400">
      <span className="text-gold-400 font-semibold">Transparence affilié :</span> Certains liens
      de cet article sont des liens d&apos;affiliation. Si vous achetez via ces liens, nous
      percevons une petite commission sans frais supplémentaires pour vous. Cela nous aide à
      maintenir ce site gratuitement.
    </div>
  ),
}

export function MDXContent({ source }: { source: string }) {
  return (
    <div className="max-w-none">
      <MDXRemote source={source} components={components} />
    </div>
  )
}
