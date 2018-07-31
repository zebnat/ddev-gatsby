module.exports = {
  siteMetadata: {
		defaultLang: 'es'
  },
  plugins: [
		'gatsby-plugin-react-helmet',
		{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
		'gatsby-plugin-glamor',
		{
			resolve: 'gatsby-plugin-typography',
			options: {
				pathToConfigModule: 'src/utils/typography.js'
			}
		},
		'gatsby-transformer-sharp',
  	'gatsby-plugin-sharp',
	]
}
