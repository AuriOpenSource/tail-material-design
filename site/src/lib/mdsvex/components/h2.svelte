<script lang="ts">
	import { cn } from '$lib/utils';

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<h2
	class={cn(
		'scroll-m-20 py-10 text-headline-large font-medium capitalize first:pt-0 last:pb-0',
		className
	)}
	{...$$restProps}
>
	<slot />
</h2>
