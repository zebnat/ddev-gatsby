import StreamCard from '../../../../src/components/stream/StreamCard'
import config from '../../../../data/config.js'
import metadataHelpers from '../../../../src/lib/seo/metadata.js'

const { buildPageMetadata } = metadataHelpers

export const metadata = {
  title: 'Zebnat Twitch Status',
  ...buildPageMetadata({
    domainUrl: config.domainUrl,
    canonicalPath: '/embed/twitch/',
    hreflangs: ['es%%/embed/twitch/', 'en%%/en/embed/twitch/'],
  }),
}

export default function TwitchEmbedEs() {
  return (
    <>
      <style>{`body{background: transparent;}`}</style>
      <StreamCard lang="es" />
    </>
  )
}
