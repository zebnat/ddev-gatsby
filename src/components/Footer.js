import React from 'react'
import Social from './Social'
import translation from '../../data/translations/footer'

const Footer = ({ lang, version }) => (
  <footer css={footerStyles}>
    <div>
      <h3>{translation[lang].contact}</h3>
      <p>{translation[lang].contactInfo}</p>
      <div
        css={{
          border: '1px solid black',
          padding: '1rem',
          margin: '1rem 0',
          borderRadius: '3px',
        }}
      >
        <b>!!! {translation[lang].warning}:</b> {translation[lang].warningInfo}
      </div>
      <Social />
    </div>
    <p
      css={{ textAlign: 'center', fontSize: '80%', margin: '2rem 0 0 0' }}
      dangerouslySetInnerHTML={{ __html: translation[lang].developedBy }}
    />
    <p css={{ fontSize: '80%' }}>{version}</p>
  </footer>
)

export default Footer

// COMPONENT STYLES

const footerStyles = {
  margin: '5rem 0 0 0',
  padding: '2rem 0',
  borderTop: '1px solid gray',
}
/* re-enable if licenses required again
const footerLicenseStyles = {
  fontSize: '50%',
  color: '#666',
}
*/
