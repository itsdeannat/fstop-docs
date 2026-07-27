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
						{ label: 'Get all clients', slug: 'guides/get-all-clients' },
						{ label: 'Get a client by ID', slug: 'guides/get-a-client-by-id' },
						{ label: 'Create a client', slug: 'guides/create-a-client' },
						{ label: 'Get all projects', slug: 'guides/get-all-projects' },
						{ label: 'Get a project by client', slug: 'guides/get-a-project-by-client' },
						{ label: 'Create a project', slug: 'guides/create-a-project' },
						{ label: 'Get all bookings', slug: 'guides/get-all-bookings' },
						{ label: 'Get a booking by project', slug: 'guides/get-a-booking-by-project' },
						{ label: 'Create a booking', slug: 'guides/create-a-booking' },
						{ label: 'Create a gallery', slug: 'guides/create-a-gallery' },
						{ label: 'Get all galleries', slug: 'guides/get-all-galleries' }
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