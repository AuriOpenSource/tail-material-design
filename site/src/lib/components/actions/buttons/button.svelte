<script lang="ts">
	import { cn } from '$lib';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLButtonElement> & {
		outlined?: boolean;
		filled?: boolean;
	};

	let className: $$Props['class'] = '';
	export { className as class };

	export let outlined = false;
	export let filled = false;
</script>

<button
	{...$$restProps}
	class={cn('btn', { 'btn-filled': filled, 'btn-outlined': outlined }, className)}
>
	<slot />
</button>
