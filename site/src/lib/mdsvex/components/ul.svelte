<script lang="ts">
	import { cn } from '$lib/utils';

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<ul class={cn('pl-8 first:mt-0 last:mb-0', className)} {...$$restProps}>
	<slot />
</ul>
