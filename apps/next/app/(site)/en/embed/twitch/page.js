import StreamCardLite from '../../../../../src/components/stream/StreamCardLite'

export const metadata = {
  title: 'Zebnat Twitch Status',
}

export default function TwitchEmbedEn() {
  return (
    <>
      <style>{`body{background: transparent;}`}</style>
      <StreamCardLite lang="en" />
    </>
  )
}
