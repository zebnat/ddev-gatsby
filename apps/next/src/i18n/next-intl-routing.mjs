import { defineRouting } from 'next-intl/routing'

import { localeRouting } from './routing.mjs'

export const nextIntlRouting = defineRouting(localeRouting)
