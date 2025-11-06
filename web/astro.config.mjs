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
				social: [
                    { icon: 'github', label: 'OpenSDD on GitHub', href: 'https://github.com/opensdd' },
                    { icon: 'reddit', label: 'OpenSDD on Reddit', href: 'https://www.reddit.com/r/OpenSDD/' },
                ],
				customCss: ['./src/styles/custom.css'],
				components: {
					ThemeSelect: './src/components/EmptyComponent.astro',
				},
				sidebar: [
					{
						label: 'Getting Started',
						items: [
							{ label: 'Overview', slug: 'overview' },
							{ label: 'How To Use', slug: 'how-to-use' },
						],
					},
				{
					label: 'Recipes',
					items: [
						{ label: 'OSDD CLI', slug: 'osdd-cli' },
						{ label: 'Catalog', slug: 'recipes-catalog' },
                        { label: 'Marketplace (coming soon)', slug: 'marketplace/overview' }
					],
				},
				{
					label: 'Resources',
					items: [{ label: 'Further Reading', slug: 'resources/further-reading' }],
				},
			],
		}),
	],
});
