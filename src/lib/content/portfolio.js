const { readdir, readFile } = require('node:fs/promises')
const { existsSync } = require('node:fs')
const path = require('node:path')

function resolvePortfolioDir() {
  let cursor = process.cwd()

  for (let i = 0; i < 12; i += 1) {
    const candidate = path.join(cursor, 'data', 'portfolio')
    if (existsSync(candidate)) {
      return candidate
    }

    const parent = path.dirname(cursor)
    if (parent === cursor) {
      break
    }

    cursor = parent
  }

  throw new Error(`Unable to locate data/portfolio from cwd: ${process.cwd()}`)
}

const PORTFOLIO_DIR = resolvePortfolioDir()

function getFrontmatterBlock(markdown) {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  return match ? match[1] : null
}

function parseScalar(frontmatter, key) {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(
    `^${escapedKey}:\\s*['\"]([^'\"]*)['\"]\\s*\\r?$`,
    'm'
  )
  const match = frontmatter.match(regex)
  return match ? match[1] : null
}

function parseArray(frontmatter, key) {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(`${escapedKey}:\\s*\\[([\\s\\S]*?)\\]`, 'm')
  const match = frontmatter.match(regex)

  if (!match) {
    return []
  }

  const values = []
  const itemRegex = /['\"]([^'\"]+)['\"]/g
  let itemMatch = itemRegex.exec(match[1])

  while (itemMatch) {
    values.push(itemMatch[1])
    itemMatch = itemRegex.exec(match[1])
  }

  return values
}

async function walkMarkdownFiles(dirPath) {
  const entries = await readdir(dirPath, { withFileTypes: true })
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dirPath, entry.name)
      if (entry.isDirectory()) {
        return walkMarkdownFiles(fullPath)
      }

      if (entry.isFile() && fullPath.endsWith('.md')) {
        return [fullPath]
      }

      return []
    })
  )

  return files.flat()
}

function sortByDateDesc(items) {
  return [...items].sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()
    return dateB - dateA
  })
}

async function getPortfolioItems(options = {}) {
  const { lang } = options
  const files = await walkMarkdownFiles(PORTFOLIO_DIR)

  const items = []
  for (const filePath of files) {
    const markdown = await readFile(filePath, 'utf8')
    const frontmatter = getFrontmatterBlock(markdown)

    if (!frontmatter) {
      continue
    }

    const item = {
      path: parseScalar(frontmatter, 'path'),
      date: parseScalar(frontmatter, 'date'),
      title: parseScalar(frontmatter, 'title'),
      description: parseScalar(frontmatter, 'description'),
      lang: parseScalar(frontmatter, 'lang'),
      tags: parseArray(frontmatter, 'tags'),
      hreflangs: parseArray(frontmatter, 'hreflangs'),
      sourceFile: filePath,
    }

    if (!item.path || !item.lang || !item.title) {
      continue
    }

    if (!lang || item.lang === lang) {
      items.push(item)
    }
  }

  return sortByDateDesc(items)
}

module.exports = {
  getPortfolioItems,
}
