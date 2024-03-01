<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	type Component = $$Generic<typeof SvelteComponent<any, any, any>>;
	$: component = data.content as unknown as Component;
	$: meta = data.meta;
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content={meta.description} />
	<meta name="keywords" content={meta.category.join(',')} />
	<meta
		content={meta.thumb}
		name="twitter:image"
		property="og:image"
	/>
</svelte:head>

<article class="container">
	<svelte:component this={component} />
</article>
