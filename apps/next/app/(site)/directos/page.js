import { streamerPage } from '../../../src/content/translations'
import staticPageMetadata from '../../../src/content/static-page-metadata.js'
import StreamCard from '../../../src/components/stream/StreamCard'

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
      <StreamCard lang="es" />
      <p>{t.intro1}</p>
      <p>{t.intro2}</p>
      <p>{t.intro3}</p>
    </section>
  )
}
