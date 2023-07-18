<script lang="ts">
	import NavRail from '$lib/components/navigation/NavRail.svelte';
	import icon from '$lib/utils/icon.js';
	import '../app.css';
	import type { NavrailType, Routes } from '$lib/utils/types.js';
	import BottomAppbar from '$lib/components/navigation/BottomAppbar.svelte';

	const routes: Routes = [
		{
			name: 'Inicio',
			href: '/',
			icon: {
				outline: icon.home.f,
				filled: icon.home.o
			}
		},
		{
			name: 'Sobre',
			href: '/b',
			icon: {
				outline: icon.home.f,
				filled: icon.home.o
			}
		},
		{
			name: 'contatos',
			href: '/c',
			icon: {
				outline: icon.blog,
				filled: icon.blog
			}
		}
	];

	function fab({ detail }: CustomEvent<NavrailType>) {
		console.log(detail.event);
	}

	export let data;
</script>

<header class="w-[80px]">
	<NavRail on:chosen={fab} menu fab currentPath={data.currentRoute} items={routes} />

	<BottomAppbar fab items={routes} currentPath={data.currentRoute} />
</header>

<main class="flex-1">
	<slot />
</main>
