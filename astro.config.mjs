import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	output: 'static',
	site: 'https://esiseplanifica.vercel.app/',
	integrations: [sitemap(), tailwind(), icon()],
});
