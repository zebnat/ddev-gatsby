import { runCli } from '../deploy/cloudfront-static.mjs'

try {
  runCli(process.argv.slice(2), process.env)
} catch (error) {
  process.stderr.write(`${error.message}\n`)
  process.exit(1)
}
