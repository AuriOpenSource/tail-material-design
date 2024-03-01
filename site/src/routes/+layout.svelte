<script>
	import { Fab } from '$lib/components/actions/fab';
	import {
		NavRail,
		NavRailItem,
		NavRailList,
		NavRailMenu
	} from '$lib/components/navigation/navrail';
	import { routes } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import '../app.css';
	import { enableCache } from '@iconify/svelte';
	enableCache('all');

</script>

<header>
	<NavRail itemsPosition="navrail-center">
		<NavRailMenu>
			<Fab>
				<Icon width="24px" icon="mdi:search" />
			</Fab>
		</NavRailMenu>
		<NavRailList>
			{#each routes as { href, label, icon }, i (i)}
				<NavRailItem {href} {icon}>{label}</NavRailItem>
			{/each}
		</NavRailList>
	</NavRail>
</header>

<main class="flex-1 p-8">
	<slot />
</main>
