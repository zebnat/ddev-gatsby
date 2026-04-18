import { Card, CardContent } from '../ui/card'

const proofByLang = {
  en: [
    {
      value: '9y+',
      label: 'Product ownership',
      detail:
        'Startup delivery, platform evolution, and continuous improvement.',
    },
    {
      value: '60',
      label: 'Published case studies',
      detail: 'Bilingual project portfolio sourced from markdown content.',
    },
    {
      value: 'AI + MLOps',
      label: 'Systems mindset',
      detail:
        'Engineering focus on reliability, observability, and iterative delivery.',
    },
  ],
  es: [
    {
      value: '9a+',
      label: 'Ownership de producto',
      detail: 'Entrega en startup, evolución de plataforma y mejora continua.',
    },
    {
      value: '60',
      label: 'Casos documentados',
      detail: 'Portfolio bilingüe de proyectos con origen en markdown.',
    },
    {
      value: 'IA + MLOps',
      label: 'Mentalidad de sistemas',
      detail:
        'Foco en fiabilidad, observabilidad y mejora iterativa de producto.',
    },
  ],
}

export default function ProofStrip({ lang }) {
  const proofItems = proofByLang[lang] || proofByLang.es

  return (
    <section
      className="grid gap-3 md:grid-cols-3"
      aria-label="Proof highlights"
    >
      {proofItems.map((item, index) => (
        <Card
          key={`proof-${index}-${item.label}`}
          className="motion-fade-up border-slate-700/70 bg-slate-900/70 p-0"
        >
          <CardContent className="space-y-2 p-4">
            <p className="font-mono text-2xl font-semibold text-cyan-100">
              {item.value}
            </p>
            <h2 className="text-base font-semibold text-slate-100">
              {item.label}
            </h2>
            <p className="text-sm text-slate-300">{item.detail}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  )
}
