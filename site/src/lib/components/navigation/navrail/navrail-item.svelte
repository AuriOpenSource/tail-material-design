<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import Icon, {type IconifyIcon} from '@iconify/svelte';

	type $$Props = HTMLAnchorAttributes & {
		icon?: string | IconifyIcon;
	};

	let className: $$Props['class'] = '';
	export { className as class };

	export let href: $$Props['href'] = '';
	export let icon: string | IconifyIcon = 'mdi:error';
</script>

<a class={cn('navrail-item group', className)} {href}>
	<div class="navrail-pill group-hover:bg-secondary-container-hover">
		<span class="group-hover:text-on-secondary-container navrail-icon">
			<Icon width="22px" {icon}/>
		</span>
	</div>

	<span class="navrail-item-title"><slot /></span>
</a>
