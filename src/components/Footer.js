import React from 'react'
import Social from './Social'
import translation from '../../data/translations/footer'

const Footer = ({ lang }) => (
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
    {/*<p css={footerLicenseStyles}>
      licenses:{' '}
      <a
        href="http://www.freepik.com"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        Background by Harryarts / Freepik
      </a>
			</p>*/}
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
