// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://opensdd.ai',
	integrations: [
		starlight({
				title: 'OpenSDD',
				pagefind: false,
				description: 'Spec-driven development for modern AI-assisted teams.',
				social: [{ icon: 'github', label: 'OpenSDD on GitHub', href: 'https://github.com/opensdd' }],
				customCss: ['./src/styles/custom.css'],
				components: {
					ThemeSelect: './src/components/EmptyComponent.astro',
				},
				sidebar: [
					{
						label: 'Getting Started',
						items: [
							{ label: 'Overview', slug: 'overview' },
							{ label: 'Quickstart', slug: 'quickstart' },
						],
					},
				{
					label: 'Tools',
					items: [
						{ label: 'OSDD CLI', slug: 'osdd-cli' },
						{ label: 'Recipes Catalog', slug: 'recipes-catalog' },
					],
				},
				{
					label: 'Marketplace',
					items: [{ label: 'Marketplace Preview', slug: 'marketplace/overview' }],
				},
				{
					label: 'Resources',
					items: [{ label: 'Further Reading', slug: 'resources/further-reading' }],
				},
			],
		}),
	],
});
