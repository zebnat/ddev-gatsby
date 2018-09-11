const linker = (defaultLang, lang, route) => defaultLang == lang ? route : '/' + lang + route;

const menuNodeFinder = (allMenu, uniqueID) => allMenu.edges.find( (element) => element.node.uniqueId == uniqueID).node

export {linker, menuNodeFinder}