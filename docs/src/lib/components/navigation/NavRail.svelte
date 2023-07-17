<script lang="ts">
	import icon from '$lib/utils/icon.js';
	import type { NavrailTypes, Routes } from '$lib/utils/types.js';
	import { createEventDispatcher } from 'svelte';
	import Icon from '../Icon.svelte';
	import Fab from '../action/Fab.svelte';

	const dispatch = createEventDispatcher<NavrailTypes>();

	export let menu = false;
	export let fab = false;
	export let currentPath: string | null = null;
	export let items: Routes = [];

	let hidden = true;
</script>

<nav class="navrail" class:relative={menu}>
	{#if menu || fab}
		<section class="fill-on-surface navrail-menu">
			{#if menu}
				<button on:click={() => (hidden = !hidden)} class="icon-btn-container">
					<span class="icon-btn">
						<Icon d={icon.menu} />
					</span>
				</button>
			{/if}
			{#if fab}
				<Fab on:click={(event) => dispatch('chosen', { name: 'fab', event })} />
			{/if}
		</section>
	{/if}
	<ul class="navrail-list">
		{#each items as { name, href, icon }, index (index)}
			<a class="group navrail-item" {href}>
				<div
					class:pill-active={currentPath === href || currentPath?.startsWith(`${href}/`)}
					class="group-hover:bg-secondary-container-hover navrail-pill"
				>
					<span class="navrail-icon group-hover:fill-on-secondary-container">
						<Icon
							d={currentPath === href || currentPath?.startsWith(`${href}/`)
								? icon.outline
								: icon.filled}
						/>
					</span>
				</div>

				<span class="navrail-item-title">
					{name}
				</span>
			</a>
		{/each}
	</ul>

	
</nav>

<style>
	.pill-active {
		background-color: rgb(var(--color-secondary-container));
	}
</style>
