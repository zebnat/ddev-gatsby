module.exports = {
  siteMetadata: {
    siteUrl: `https://www.danieldev.es`, // required for sitemap plugin
    defaultLang: 'es',
    latestVersion: 'v1.11.0',
    domainUrl: 'https://www.danieldev.es',
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
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    'gatsby-remark-embed-youtube',
    'gatsby-remark-responsive-iframe',
    'gatsby-transformer-sharp',
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-plugin-sharp`,
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
              withWebp: true,
              quality: 65,
            },
          },
          {
            resolve: 'gatsby-remark-embed-youtube',
            options: {
              width: 590,
              height: 400,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data/portfolio/`,
        name: 'md-portfolio',
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`,
  ],
}
