<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLUListElement>;

	let className: $$Props['class'] = '';
	export { className as class };
</script>

<ul {...$$restProps} class={cn('navrail-list', className)}>
	<slot />
</ul>
