module.exports = {
  siteMetadata: {
		title: 'Fullstack Developer (Barcelona) - Daniel D. Portfolio',
		shortTitle: 'Daniel D. Portfolio'
  },
  plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-glamor',
		{
			resolve: 'gatsby-plugin-typography',
			options: {
				pathToConfigModule: 'src/utils/typography.js'
			}
		}
	]
}
