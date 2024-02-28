<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLImgAttributes } from 'svelte/elements';

	let className: string | undefined | null = undefined;
	export { className as class };
	export let src: HTMLImgAttributes['src'] = undefined;
	export let alt: HTMLImgAttributes['alt'] = undefined;
</script>

<figure class="py-2">
	<img {src} {alt} class={cn('rounded-md', className)} />
</figure>
