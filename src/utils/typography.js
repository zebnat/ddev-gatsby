import Typography from "typography"
import lawton from "typography-theme-lawton"
import code from 'typography-plugin-code'

// overriding theme configs

lawton.plugins = [
	new code()
]
lawton.baseFontSize = "16px"
lawton.lineHeight = "24px"
lawton.scaleRatio = 2
lawton.googleFonts = [
	{
		name: 'Oswald',
		styles: [
			'700'
		]
	},
	{
		name: 'Lato',
		styles: [
			'400',
			'700i'
		]
	}
]

lawton.headerFontFamily = ['Oswald', 'Helvetica', 'sans-serif']
lawton.bodyFontFamily = ['Lato', 'georgia', 'serif']
lawton.bodyGray = 20

// custom styles theme
lawton.overrideThemeStyles = ({ rhythm }, options) => ({
  'body': {
    background: "#f8f8f8"
	},
	'h1': {
		color: '#0a61ff'
	},
	'@media only screen and (max-width: 480px)' : {
		html: {
			fontSize: '100%',
			lineHeight: '24px',
		}
	}
})

const typography = new Typography(lawton)

export default typography