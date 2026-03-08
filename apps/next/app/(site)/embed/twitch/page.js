import StreamCardLite from '../../../../src/components/stream/StreamCardLite'

export const metadata = {
  title: 'Zebnat Twitch Status',
}

export default function TwitchEmbedEs() {
  return (
    <>
      <style>{`body{background: transparent;}`}</style>
      <StreamCardLite lang="es" />
    </>
  )
}
