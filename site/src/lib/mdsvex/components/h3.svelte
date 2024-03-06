<script lang="ts">
	import { cn } from '$lib/utils';

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<h3
	class={cn('text-title-large mt-8 scroll-m-20 font-semibold tracking-tight', className)}
	{...$$restProps}
>
	<slot />
</h3>
