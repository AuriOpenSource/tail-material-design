<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLElement> & {
		outlined?: boolean;
		filled?: boolean;
	};

	let className: $$Props['class'] = '';
	export { className as class };

	export let outlined = false;
	export let filled = false;
</script>

<section
	{...$$restProps}
	class={cn('card', { 'card-filled': filled, 'card-outlined': outlined }, className)}
>
	<slot />
</section>
