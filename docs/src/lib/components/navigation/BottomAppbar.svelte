<script lang="ts">
	import type { Routes } from '$lib/utils/types.js';
	import { onMount } from 'svelte';
	import Icon from '../Icon.svelte';
	import Fab from '../action/Fab.svelte';
	import { handleScroll } from '$lib/utils/handlescroll.js';

	let fabEle: HTMLElement;
	let navbar: HTMLElement;

	export let items: Routes = [];
	export let fab = false;
	export let currentPath: string | null = null;

	onMount(() => {
		if (fab) handleScroll(navbar, fabEle);
	});
</script>

<nav class="bottom-appbar">
	{#if fab}
		<div bind:this={fabEle} class="fixed bottom-24 transition-all right-4 duration-150">
			<Fab />
		</div>
	{/if}
	<ul bind:this={navbar} class="bg-background bottom-appbar-list">
		{#each items as { href, icon, name }, i (i)}
			<a
				{href}
				class="group bottom-appbar-item"
				aria-label={`Ir para a página ${name}`}
				aria-current={currentPath === href || currentPath?.startsWith(`${href}/`) ? 'page' : null}
				role="tab"
				tabindex="0"
			>
				<div
					class="group-hover:bg-secondary-container-hover bottom-appbar-pill"
					style="background-color:{currentPath === href || currentPath?.startsWith(`${href}/`)
						? 'rgb(var(--color-secondary-container))'
						: ''} "
				>
					<span
						class="fill-on-background group-hover:fill-on-secondary-container bottom-appbar-icon"
					>
						<Icon
							d={currentPath === href || currentPath?.startsWith(`${href}/`)
								? icon.filled
								: icon.outline}
						/>
					</span>
				</div>
				<span class="bottom-appbar-title">{name}</span>
			</a>
		{/each}
	</ul>
</nav>
