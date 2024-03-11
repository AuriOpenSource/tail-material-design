<script lang="ts">
	import { page } from '$app/stores';
	import TOC from '$lib/components/table-of-contents/index.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	type Component = $$Generic<typeof SvelteComponent<any, any, any>>;
	$: component = data.content as unknown as Component;
	$: meta = data.meta;
</script>

<svelte:head>
	<title>Components - {meta.title}</title>
	<meta name="description" content={meta.description} />
	<meta name="keywords" content={meta.category.join(',')} />
	<meta content={meta.thumb} name="twitter:image" property="og:image" />
</svelte:head>


<article class="w-full" id="mdsvex">
	<svelte:component this={component} />
</article>

<aside class="hidden md:block">
	<div class="fixed top-10">
		{#key $page.url.pathname}
			<TOC/>
		{/key}
	</div>
</aside>