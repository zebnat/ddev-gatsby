import Typography from 'typography'
import lawton from 'typography-theme-lawton'
import code from 'typography-plugin-code'

// overriding theme configs

lawton.plugins = [new code()]
lawton.baseFontSize = '16px'
lawton.lineHeight = '20px'
lawton.scaleRatio = 2

lawton.googleFonts = [
  {
    name: 'Oswald',
    styles: ['700'],
  },
  {
    name: 'Lato',
    styles: ['400', '700i'],
  },
]

lawton.headerFontFamily = ['Oswald', 'Helvetica', 'sans-serif']
lawton.bodyFontFamily = ['Lato', 'georgia', 'serif']

lawton.bodyGray = 20

// custom styles theme
const subheadingColor = '#262626'
lawton.overrideThemeStyles = ({ rhythm }, options) => ({
  a: {
    color: '#f38800',
    textDecoration: 'none',
    fontWeight: 'normal',
  },
  body: {
    background: '#f8f8f8',
  },
  h1: {
    color: '#0a61ff',
    fontSize: '220%',
  },
  h2: {
    color: subheadingColor,
    fontSize: '180%',
  },
  h3: {
    color: subheadingColor,
    fontSize: '150%',
  },
  h4: {
    color: subheadingColor,
    fontSize: '120%',
  },
  h5: {
    color: subheadingColor,
    fontSize: '110%',
  },
  '@media only screen and (max-width: 480px)': {
    html: {
      fontSize: '100%',
      lineHeight: '24px',
    } /*,
    p: {
      textAlign: 'justify',
    },*/,
  },
})

const typography = new Typography(lawton)
const { rhythm, scale } = typography
export { rhythm, scale, typography as default }
