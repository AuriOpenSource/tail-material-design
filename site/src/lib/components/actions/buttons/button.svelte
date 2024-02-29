<script lang="ts">
	import { cn } from '$lib';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLButtonElement> & {
		outlined?: boolean;
		filled?: boolean;
		onClick?: () => void;
	};

	let className: $$Props['class'] = '';
	export { className as class };

	export let outlined = false;
	export let filled = false;
	export let onClick: () => void | undefined;
</script>

<button
	{...$$restProps}
	on:click={onClick}
	class={cn('btn', { 'btn-filled': filled, 'btn-outlined': outlined }, className)}
>
	<slot />
</button>
