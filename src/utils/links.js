const linker = (defaultLang, lang, route) =>
  defaultLang === lang ? route : '/' + lang + route

const menuNodeFinder = (allMenu, uniqueID) =>
  allMenu.edges.find(element => element.node.uniqueId === uniqueID).node


const linkToSection = (opts) => {
	const {sectionId, defaultLang, allMenuData } = opts;
	const el = menuNodeFinder(allMenuData, sectionId)
	const link = linker(defaultLang, el.lang, el.route)

	return link;
}
export { linkToSection, menuNodeFinder, linker }
