<script lang="ts">
	import Tree from './tree.svelte';
	import { createTableOfContents } from '@melt-ui/svelte';
  
	const {
	  elements: { item },
	  states: { activeHeadingIdxs, headingsTree },
	} = createTableOfContents({
	  selector: '#mdsvex',
	  activeType: 'highest',
	  scrollOffset: 60
	});

</script>
  
<div
	class="flex flex-col w-full"
>
	<div class="overflow-y-auto">
	  <p class="text-on-variant text-label-medium">On This Page</p>
	  <nav>
		{#key $headingsTree}
		  <Tree
			tree={$headingsTree}
			activeHeadingIdxs={$activeHeadingIdxs}
			{item}
		  />
		{/key}
	  </nav>
	</div>
</div>