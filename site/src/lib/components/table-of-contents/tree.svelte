<script lang="ts">
	import {
	  type TableOfContentsItem,
	  type TableOfContentsElements,
	  melt,
	} from '@melt-ui/svelte';
  
	export let tree: TableOfContentsItem[] = [];
	export let activeHeadingIdxs: number[];
	export let item: TableOfContentsElements['item'];
	export let level = 1;
</script>
  
<div class="list-none p-1 text-label-large {level !== 1 ? 'pl-2' : ''}">
	{#if tree && tree.length}
		{#each tree as heading, i (i)}
		<div class="pt-2">
			<a
			href="#{heading.id}"
			use:melt={$item(heading.id)}
			class="btn h-7 w-full justify-start text-on-surface transition-colors"
			>
			{@html heading.node.innerHTML}
			</a>
			{#if heading.children && heading.children.length}
			<svelte:self
				tree={heading.children}
				level={level + 1}
				{activeHeadingIdxs}
				{item}
			/>
			{/if}
		</div>
		{/each}
	{/if}
</div>

<style>
	[data-active] {
		font-weight: 600;
		color: theme('colors.primary');
		@apply ring-1 ring-primary;
	}
</style>