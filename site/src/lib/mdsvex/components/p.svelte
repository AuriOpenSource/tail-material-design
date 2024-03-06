<script lang="ts">
	import { cn } from '$lib/utils';

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<p class={cn('[&:not(:first-child)]:my-3', className)} {...$$restProps}>
	<slot />
</p>
