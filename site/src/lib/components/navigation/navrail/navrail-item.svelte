<script lang="ts">
	import { cn } from '$lib/utils';
	import Icon, { type IconifyIcon } from '@iconify/svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	type $$Props = HTMLAnchorAttributes & {
		icon?: string | IconifyIcon;
		currentRoute: string;
	};

	let className: $$Props['class'] = '';
	export { className as class };

	export let href: $$Props['href'] = '';
	export let icon: string | IconifyIcon = 'mdi:error';
	export let currentRoute: string = '';
</script>

<a class={cn('navrail-item group text-label-medium', className)} {href}>
	<div
		class={cn(
			'navrail-pill group-hover:bg-secondary-container-hover',
			currentRoute === href ? 'bg-secondary-container' : ''
		)}
	>
		<span class="group-hover:text-on-secondary-container navrail-icon">
			<Icon width="22px" {icon} />
		</span>
	</div>

	<span class="navrail-item-title"><slot /></span>
</a>
