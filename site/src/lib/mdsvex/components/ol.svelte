<script lang="ts">
	import { cn } from '$lib/utils';

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<ol class={cn('my-3 pl-8 list-decimal', className)} {...$$restProps}>
	<slot />
</ol>
