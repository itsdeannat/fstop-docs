import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Fstop API Docs',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/itsdeannat/fstop-docs'},
			],
			sidebar: [
				{
					label: 'Start here',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'About the API', slug: 'guides/about-the-api'},
						{ label: 'Getting started', slug: 'guides/getting-started' },
						{ label: 'Authentication', slug: 'guides/authentication' },
					],
				},
				{
					label: 'Feature guides',
					items: [
						{
							label: 'Bookings',
							items: [{ autogenerate: { directory: 'guides/Bookings' } }]
						},
						{
							label: 'Clients',
							items: [{ autogenerate: { directory: 'guides/Clients' } }]
						},
						{
							label: 'Galleries',
							items: [{ autogenerate: { directory: 'guides/Galleries' } }]
						},
						{
							label: 'Projects',
							items: [{ autogenerate: { directory: 'guides/Projects' } }]
						}
					]
				},
				{
					label: 'API reference',
					items: [{ autogenerate: { "directory": "reference" } }]
				},
			],
		}),
	],
});