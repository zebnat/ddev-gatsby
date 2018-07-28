module.exports = {
  siteMetadata: {
		defaultLang: 'es',
		title: 'Fullstack Developer (Barcelona) - Daniel D. Portfolio',
		shortTitle: 'Daniel D. Portfolio',
		menuList: [
			{ 
				lang: "es",
				list: [
					{
						icon: 'home',
						text: 'Inicio',
						route: '/'
					},
					{
						icon: 'face',
						text: 'Conóceme',
						route: '/acerca-de-mi/'
					},
					{
						icon: 'build',
						text: 'Habilidad',
						route: '/tecnologias/'
					},
					{
						icon: 'archive',
						text: 'Proyectos',
						route: '/proyectos/'
					},
					{
						icon: 'school',
						text: 'Currículum',
						route: '/estudios-y-empresas/'
					},
					{
						icon: 'file_copy',
						text: 'Artículos',
						route: '/articulos/'
					},
					{
						icon: 'create',
						text: 'Contacto',
						route: '/contacto/'
					}
				]
			},
			{
				lang: "en",
				list: [
					{
						icon: 'home',
						text: 'Home',
						route: '/'
					},
					{
						icon: 'face',
						text: 'About',
						route: '/about-me/'
					},
					{
						icon: 'build',
						text: 'Skills',
						route: '/skills/'
					},
					{
						icon: 'archive',
						text: 'Proyects',
						route: '/proyects/'
					},
					{
						icon: 'school',
						text: 'Resume',
						route: '/resume/'
					},
					{
						icon: 'file_copy',
						text: 'Blog',
						route: '/blog/'
					},
					{
						icon: 'create',
						text: 'Contact Me',
						route: '/contact/'
					}
				]
			}
		]
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
