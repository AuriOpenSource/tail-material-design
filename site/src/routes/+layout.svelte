<script>
	import { Fab } from '$lib/components/actions/fab';
	import {
		NavDrawer,
		NavDrawerContent,
		NavDrawerHeader,
		NavDrawerItem
	} from '$lib/components/navigation/navdrawer';
	import {
		NavRail,
		NavRailItem,
		NavRailList,
		NavRailMenu
	} from '$lib/components/navigation/navrail';
	import { routes } from '$lib/utils';
	import Icon, { enableCache } from '@iconify/svelte';
	import '../app.css';
	enableCache('all');
	let open = false;

	export let data;
	$: ({ currentRoute } = data);
</script>

<header class="flex">
	<NavRail itemsPosition="navrail-center">
		<NavRailMenu>
			<button class="btn" on:click={() => (open = true)}>
				<Icon width="24px" icon="mdi:menu" />
			</button>
			<!-- <Fab>
				<Icon width="24px" icon="mdi:search" />
			</Fab> -->
		</NavRailMenu>
		<NavRailList>
			{#each routes as { href, label, icon }, i (i)}
				<NavRailItem {currentRoute} {href} {icon}>{label}</NavRailItem>
			{/each}
		</NavRailList>
	</NavRail>

	<NavDrawer bind:open>
		<NavDrawerContent side="left">
			<NavDrawerHeader>
				<h2>MAIL</h2>
			</NavDrawerHeader>
			<ul class="px-3 text-label-large">
				{#each routes as { href, label, icon }, i (i)}
					<NavDrawerItem {currentRoute} {icon} {href}>
						{label}
					</NavDrawerItem>
				{/each}
			</ul>
		</NavDrawerContent>
	</NavDrawer>
</header>

<main class="flex-1 p-8">
	<slot />
</main>
