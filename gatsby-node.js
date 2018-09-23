const crypto = require(`crypto`)
const localeGlobals = require('./data/localeGlobals')
const config = require('./data/config')
const path = require('path');



 exports.sourceNodes = ({ actions }) => {
		const { createNode } = actions

		// Group routes for each unique menu ie: home, articles, etc
		var hrefLangForMenus = {}
		localeGlobals.menuList.sort((a, b) => {
			if (a.sortOrder > b.sortOrder) {
				return 1;
			}
			if (a.sortOrder < b.sortOrder) {
				return -1;
			}
			return 0;
		})
		
		localeGlobals.menuList.forEach(menu => {
			if(hrefLangForMenus[menu.uniqueId] == undefined) {
				hrefLangForMenus[menu.uniqueId] = []
			}

			hrefLangForMenus[menu.uniqueId].push({
				'locale': menu.lang,
				'url': (config.defaultLang === menu.lang ? '' : '/'+menu.lang) + menu.route
			})
		})

		localeGlobals.menuList.forEach(menu => {
			// Add the hrefLangs we gathered above to the menu object
			menu['hrefLangs'] = hrefLangForMenus[menu.uniqueId]

			const unique = crypto
			.createHash('md5')
			.update(JSON.stringify(menu))
			.digest(`hex`);

			createNode({
				id: unique,
				parent: null,
				children: [],
				internal: {
					type: 'Menu',
					contentDigest: unique
				},
				...menu
			});
		});

		localeGlobals.siteMetaData.forEach(data => {

			const unique = crypto
			.createHash('md5')
			.update(JSON.stringify(data))
			.digest(`hex`);

			createNode({
				id: unique,
				parent: null,
				children: [],
				internal: {
					type: 'MetaData',
					contentDigest: unique
				},
				...data
			});
		});

 }

 exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/portfolio.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 100
      ) {
        edges {
          node {
            frontmatter {
							path
							lang
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
			console.log('will create a page inside: ' + node.frontmatter.path);
      createPage({
        path: node.frontmatter.path,
				component: blogPostTemplate,
        context: {
					lang: node.frontmatter.lang
				}, // additional data can be passed via context
      })
    })
  })
}

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
/* not needed
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
		console.log(page.path);
		console.log(page.context);

		const match = page.path.match(/^\/(en|ca)\//);

		page.context = {
			currentLang: 'es'
		}

    if (match && match.length > 0) {
      page.context = {
				currentLang: match[1]
			}
		}
				
		// Update the page.
		createPage(page);
    resolve();
  });
};

*/