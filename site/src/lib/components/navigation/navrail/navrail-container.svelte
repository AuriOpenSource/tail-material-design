<script lang="ts">
	import { cn } from '$lib';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLElement> & {
		itemsPosition?: 'navrail-top' | 'navrail-center' | 'navrail-bottom';
	};

	let className: $$Props['class'] = '';
	export { className as class };

	export let itemsPosition = 'navrail-center';
</script>

<nav {...$$restProps} class={cn('navrail z-10 min-w-[80px]', itemsPosition, className)}>
	<slot />
</nav>
