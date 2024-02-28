<script lang="ts">
	import { cn } from '$lib/utils';

	let className: string | undefined | null = undefined;
	export { className as class };
	export let href: string;

	$: internal = href.startsWith('/') || href.startsWith('#');

	$: rel = !internal ? 'noopener noreferrer' : undefined;
	$: target = !internal ? '_blank' : undefined;
</script>

<a
	{href}
	{target}
	{rel}
	class={cn('font-medium underline decoration-primary decoration-slice', className)}
	{...$$restProps}
>
	<slot />
</a>
