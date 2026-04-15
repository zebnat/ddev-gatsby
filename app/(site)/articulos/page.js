import staticPageMetadata from '../../../src/content/static-page-metadata.js'

const { buildStaticPageMetadata } = staticPageMetadata

export const metadata = buildStaticPageMetadata({
  lang: 'es',
  uniqueId: 'articles',
  title: 'Índice de artículos',
})

export default function ArticlesPageEs() {
  return (
    <section>
      <h1>Índice de artículos</h1>
      <p>Hablo de tecnologías, SEO, consejos y opinión.</p>
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
