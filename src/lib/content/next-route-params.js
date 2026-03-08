async function resolveCatchAllSlug(paramsOrPromise) {
  const resolved = await paramsOrPromise
  const slug = resolved?.slug

  return Array.isArray(slug) ? slug : []
}

module.exports = {
  resolveCatchAllSlug,
}
