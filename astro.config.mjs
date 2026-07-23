import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Fstop API Docs',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/itsdeannat/fstop-api-docs.git'},
			],
			sidebar: [
				{
					label: 'Start here',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'About the API', slug: 'guides/about-the-api'},
						{ label: 'Getting started', slug: 'guides/getting-started' }
					],
				},
				{
					label: 'Feature guides',
					items: [
						{ label: 'Authentication', slug: 'guides/authentication' },
				// 		{ label: 'Get all clients', slug: 'guides/get-all-clients' },
				// 		{ label: 'Get a client', slug: 'guides/get-client' },
				// 		{ label: 'Create a client', slug: 'guides/create-client' },
				// 		{ label: 'Get all projects', slug: 'guides/get-all-projects' },
				// 		{ label: 'Get a project by client', slug: 'guides/get-project-by-client' },
				// 		{ label: 'Create a project', slug: 'guides/create-project' },
				// 		{ label: 'Get all bookings', slug: 'guides/get-all-bookings' },
				// 		{ label: 'Get a booking by project', slug: 'guides/get-booking-by-project' },
				// 		{ label: 'Create a booking', slug: 'guides/create-booking' }
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