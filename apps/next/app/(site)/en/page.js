import { homePage } from '../../../src/content/translations'
import staticPageMetadata from '../../../src/content/static-page-metadata.js'
import richText from '../../../../../src/lib/content/rich-text.js'

const t = homePage.en
const { buildStaticPageMetadata } = staticPageMetadata
const { injectLinkPlaceholder } = richText

export const metadata = buildStaticPageMetadata({
  lang: 'en',
  uniqueId: 'home',
  title: t.title,
})

export default function HomePageEn() {
  return (
    <section>
      <h1>{t.h1}</h1>
      <p>{t.h2}</p>

      <blockquote>{t.quote}</blockquote>

      <div
        dangerouslySetInnerHTML={{
          __html: injectLinkPlaceholder(t.intro, '/en/about-me/'),
        }}
      />

      <h2>{t.skills}</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: injectLinkPlaceholder(t.skillsInfo, '/en/skills/'),
        }}
      />

      <h2>{t.projects}</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: injectLinkPlaceholder(t.projectInfo, '/en/projects/'),
        }}
      />

      <h2>{t.academic}</h2>
      <div dangerouslySetInnerHTML={{ __html: t.academicInfo }} />

      <ul>
        <li>
          <a href="/docs/cv-en.pdf">{t.resume}</a>
        </li>
        <li>
          <a href="/docs/carta-recomendacion-pw.pdf">{t.recommendationPW}</a>
        </li>
        <li>
          <a href="/docs/certificado-experiencia-laboral-pw.pdf">
            {t.certificate}
          </a>
        </li>
      </ul>
    </section>
  )
}
