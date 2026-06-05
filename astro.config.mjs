// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import alpinejs from '@astrojs/alpinejs';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Canonical origin used by canonical URLs, OG tags, RSS, and the sitemap.
  site: 'https://www.stentor.live',
  integrations: [
    alpinejs(),
    mdx(),
    sitemap({
      // Keep authentication / utility pages out of search indexes.
      filter: (page) =>
        !page.includes('/signin') &&
        !page.includes('/signup') &&
        !page.includes('/404'),
    }),
  ],
  // Self-hosted, optimized web fonts. Astro generates a metric-adjusted
  // fallback face per family to eliminate CLS during the swap from system
  // font to web font (Lighthouse "Layout shift culprits").
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Geist',
      cssVariable: '--font-geist',
      weights: ['400', '500', '600', '700'],
      fallbacks: ['ui-sans-serif', 'system-ui', '-apple-system', 'Helvetica Neue', 'Arial', 'sans-serif'],
      optimizedFallbacks: true,
    },
    {
      provider: fontProviders.google(),
      name: 'Geist Mono',
      cssVariable: '--font-geist-mono',
      weights: ['400', '500'],
      fallbacks: ['ui-monospace', 'SF Mono', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      optimizedFallbacks: true,
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
