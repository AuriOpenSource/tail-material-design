<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLUListElement>;

	let className: $$Props['class'] = '';
	export { className as class };
</script>

<section class={cn('navrail-menu', className)}>
	<slot />
</section>
