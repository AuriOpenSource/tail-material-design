<script lang="ts">
	import { Dialog as SheetPrimitive } from 'bits-ui';
	import {
		NavDrawerOverlay,
		NavDrawerPortal,
		navDrawerTransitions,
		navdrawerVariants,
		type Side
	} from '.';
	import { cn } from '$lib/utils';
	import { fly } from 'svelte/transition';

	type $$Props = SheetPrimitive.ContentProps & {
		side?: Side;
	};

	let className: $$Props['class'] = undefined;
	export let side: Side = 'right';
	export { className as class };
	export let inTransition: $$Props['inTransition'] = fly;
	export let inTransitionConfig: $$Props['inTransitionConfig'] =
		navDrawerTransitions[side ? side : 'right']['in'];
	export let outTransition: $$Props['outTransition'] = fly;
	export let outTransitionConfig: $$Props['outTransitionConfig'] =
		navDrawerTransitions[side ? side : 'right']['out'];
</script>

<NavDrawerPortal>
	<NavDrawerOverlay />
	<SheetPrimitive.Content
		{inTransition}
		{inTransitionConfig}
		{outTransition}
		{outTransitionConfig}
		class={cn(navdrawerVariants({ side }), className)}
		{...$$restProps}
	>
		<slot />
	</SheetPrimitive.Content>
</NavDrawerPortal>
