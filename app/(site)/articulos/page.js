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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum
        nunc diam. Pellentesque malesuada velit in nisl venenatis consequat.
        Aliquam pharetra massa nisl, eget dignissim turpis lacinia nec. Morbi
        quis rhoncus arcu. Pellentesque eleifend, urna nec hendrerit lobortis,
        sem ipsum imperdiet purus, dapibus molestie sem ipsum vel leo.
        Vestibulum hendrerit fringilla ipsum id dictum. Mauris vel erat
        accumsan, mattis erat at, lobortis odio. Phasellus in dolor bibendum,
        placerat velit vel, feugiat justo. Morbi hendrerit a purus sit amet
        congue. Nulla gravida dignissim velit vitae ultrices. Integer euismod
        dignissim lectus nec posuere. Suspendisse potenti. Nam a aliquam magna.
      </p>
    </section>
  )
}
