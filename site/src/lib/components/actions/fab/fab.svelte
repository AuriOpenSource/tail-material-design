<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	type FabSize = 'fab-small' | 'fab-normal' | 'fab-large';
	type $$Props = HTMLAttributes<HTMLDivElement> & {
		size?: FabSize;
	};

	let className: $$Props['class'] = '';
	export { className as class };
	export let size: FabSize = 'fab-normal';
</script>

<div {...$$restProps} class={cn('fab bg-primary', size, className)}>
	<slot />
</div>
