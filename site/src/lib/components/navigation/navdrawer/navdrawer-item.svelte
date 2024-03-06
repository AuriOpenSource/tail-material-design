<script lang="ts">
	import { cn } from '$lib/utils';
	import Icon, { type IconifyIcon } from '@iconify/svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLAnchorElement> & {
		icon?: string | IconifyIcon;
		badge?: string;
		href: string;
		currentRoute: string;
	};

	export let className: $$Props['class'] = '';
	export let icon: string | IconifyIcon = '';
	export let href: string = '';
	export let badge: string | null = null;
	export let currentRoute: string = '';

	export { className as class };
</script>

<a
	{href}
	class={cn(
		'flex items-center min-h-14 gap-3 pl-4 pr-6 rounded-full',
		currentRoute === href ? 'bg-secondary-container' : '',
		className
	)}
>
	<Icon {icon} width="24px" />
	<span class="flex-1">
		<slot />
	</span>
	{#if badge}
		<span>{badge}</span>
	{/if}
</a>
