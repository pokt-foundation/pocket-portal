import { vitePlugin as remix } from "@remix-run/dev"
import { installGlobals } from "@remix-run/node"
import { vercelPreset } from "@vercel/remix/vite"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

installGlobals()

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    remix({
      presets: [vercelPreset()],
      ignoredRouteFiles: ["**/.*"],
      // @ts-ignore
      postcss: true,
      serverDependenciesToBundle: [/^remix-utils.*/],
      buildDirectory: "public/build",
    }),
    tsconfigPaths(),
  ],
  build: {
    rollupOptions: {
      external: ["~/models/portal/sdk"],
    },
  },
})
