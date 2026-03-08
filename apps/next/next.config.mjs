import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const nextRoot = dirname(fileURLToPath(import.meta.url))
const workspaceRoot = resolve(nextRoot, '..', '..')

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  turbopack: {
    root: workspaceRoot,
  },
}

export default nextConfig
