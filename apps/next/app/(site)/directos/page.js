import { streamerPage } from '../../../src/content/translations'
import staticPageMetadata from '../../../src/content/static-page-metadata.js'
import StreamCardLite from '../../../src/components/stream/StreamCardLite'

const t = streamerPage.es
const { buildStaticPageMetadata } = staticPageMetadata

export const metadata = buildStaticPageMetadata({
  lang: 'es',
  uniqueId: 'streamer',
  title: t.title,
})

export default function StreamerPageEs() {
  return (
    <section>
      <h1>{t.h1}</h1>
      <p>{t.h2}</p>
      <StreamCardLite lang="es" />
      <p>{t.intro1}</p>
      <p>{t.intro2}</p>
      <p>{t.intro3}</p>
    </section>
  )
}
