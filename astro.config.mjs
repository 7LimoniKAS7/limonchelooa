import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  // Avoid ERR_CONNECTION_REFUSED (-102): bind explicitly; use http://127.0.0.1:4321 if localhost fails
  server: {
    host: "127.0.0.1",
    port: 4321,
    strictPort: false,
    open: true,
  },
  preview: {
    host: "127.0.0.1",
    port: 4321,
    strictPort: false,
  },
  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
});
