import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://7limonikas7.github.io',
  base: isProd ? '/limonchelooa' : '/',
  integrations: [tailwind()],
});
