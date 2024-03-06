import type { IconifyIcon } from '@iconify/svelte';

interface Route {
	label: string;
	href: string;
	icon: string | IconifyIcon;
}

export default [
	{
		label: 'Inicio',
		href: '/',
		icon: 'mdi:home'
	},
	{
		label: 'Docs',
		href: '/docs',
		icon: 'mdi:code-tags'
	},
	{
		label: 'Components',
		href: '/components',
		icon: 'mdi:plus-circle'
	}
] satisfies Route[];
