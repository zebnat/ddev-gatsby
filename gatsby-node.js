const crypto = require(`crypto`)
const localeGlobals = require('./data/localeGlobals')
const config = require('./data/config')

 exports.sourceNodes = ({ actions }) => {
		const { createNode } = actions

		localeGlobals.menuList.forEach(menu => {
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

 

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
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

