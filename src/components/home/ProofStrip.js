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
      value: 'ES/EN',
      label: 'Route parity',
      detail:
        'Static pages maintain language consistency and canonical routing.',
    },
  ],
  es: [
    {
      value: '9a+',
      label: 'Ownership de producto',
      detail: 'Entrega en startup, evolucion de plataforma y mejora continua.',
    },
    {
      value: '60',
      label: 'Casos documentados',
      detail: 'Portfolio bilingue de proyectos con origen en markdown.',
    },
    {
      value: 'ES/EN',
      label: 'Paridad de rutas',
      detail: 'Paginas estaticas con consistencia de idioma y rutas canonicas.',
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
      {proofItems.map((item) => (
        <Card
          key={item.label}
          className="border-slate-700/70 bg-slate-900/70 p-0"
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
