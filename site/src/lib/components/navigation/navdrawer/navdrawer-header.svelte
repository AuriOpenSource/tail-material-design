<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<header class={cn('min-h-14 px-7 flex items-center text-title-small', className)} {...$$restProps}>
	<slot />
</header>
