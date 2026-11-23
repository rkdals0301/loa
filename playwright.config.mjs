import { defineConfig } from '@playwright/test'

const origin = 'http://127.0.0.1:4179'

export default defineConfig({
  use: { baseURL: origin },
  webServer: {
    command: 'node node_modules/next/dist/bin/next start --hostname 127.0.0.1 --port 4179',
    url: origin,
  },
})
