import staticPageMetadata from '../../../src/content/static-page-metadata.js'

const { buildStaticPageMetadata } = staticPageMetadata

export const metadata = buildStaticPageMetadata({
  lang: 'es',
  uniqueId: 'articles',
  title: 'Indice de articulos',
})

export default function ArticlesPageEs() {
  return (
    <section>
      <h1>Indice de articulos</h1>
      <p>Hablo de tecnologias, SEO, consejos y opinion.</p>
      <p>
        Esta seccion se migra por paridad de rutas. El contenido editorial se
        mantendra y ampliara en la fase siguiente.
      </p>
    </section>
  )
}
