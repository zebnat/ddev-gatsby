import StreamCardLite from '../../../../../src/components/stream/StreamCardLite'
import config from '../../../../../../../data/config.js'
import metadataHelpers from '../../../../../../../src/lib/seo/metadata.js'

const { buildPageMetadata } = metadataHelpers

export const metadata = {
  title: 'Zebnat Twitch Status',
  ...buildPageMetadata({
    domainUrl: config.domainUrl,
    canonicalPath: '/en/embed/twitch/',
    hreflangs: ['es%%/embed/twitch/', 'en%%/en/embed/twitch/'],
  }),
}

export default function TwitchEmbedEn() {
  return (
    <>
      <style>{`body{background: transparent;}`}</style>
      <StreamCardLite lang="en" />
    </>
  )
}
