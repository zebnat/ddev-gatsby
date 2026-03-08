import staticPageMetadata from '../../../src/content/static-page-metadata.js'

const { buildStaticPageMetadata } = staticPageMetadata

export const metadata = buildStaticPageMetadata({
  lang: 'es',
  uniqueId: 'contact',
  title: 'Ponte en contacto',
})

export default function ContactPageEs() {
  return (
    <section>
      <h1>Ponte en contacto</h1>
      <p>Formulario de contacto y otros datos.</p>
      <p>
        Puedes escribirme a <code>contacto@danieldev.es</code> o usar los
        enlaces sociales.
      </p>
    </section>
  )
}
