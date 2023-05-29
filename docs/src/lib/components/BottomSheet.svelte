<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { heightTransition, outroClass } from './animation';
	import { easeEmphasizedDecel, easeEmphasizedAccel } from './easing';
	import Sheet from './_Sheet.svelte';

	export let height = 160;
	export let showHandle = true;
	export let isDialog = true;
	export let closeOnMinimize = true;

	const dispatch = createEventDispatcher();
	let sheet: HTMLDivElement | null;
	$: if (sheet) height = Math.min(height, sheet.offsetHeight);
	$: if (height < 48) {
		if (closeOnMinimize) dispatch('close', 'minimized');
		else height = 48;
	}

	let isDragging = false;
	let startY: number;
	const handleMouseMove = (e: { clientY: number }) => {
		if (!isDragging) return;
		const distance = e.clientY - startY;
		height -= distance;
		startY = e.clientY;
	};
	let goingUp = true;
	const moveSheet = (e: MouseEvent) => {
		if (!sheet) return;
		if (e.detail) return;
		if (height == sheet.offsetHeight) goingUp = false;
		if (height == 48) goingUp = true;
		if (goingUp) height = height + 160;
		else height = Math.max(height - 160, 48);
	};
	const open = (node: HTMLDialogElement) => node.showModal();
</script>

<svelte:window
	on:mousemove={handleMouseMove}
	on:touchmove={(e) => handleMouseMove(e.touches[0])}
	on:mouseup={() => (isDragging = false)}
	on:touchend={() => (isDragging = false)}
/>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<svelte:element
	this={isDialog ? 'dialog' : 'div'}
	class="bottom-sheet"
	class:no-drag={!isDragging}
	style="max-height: {height}px;"
	use:open
	use:outroClass
	in:heightTransition={{ height, duration: 400, easing: easeEmphasizedDecel }}
	out:heightTransition={{ height, duration: 200, easing: easeEmphasizedAccel }}
	on:cancel|preventDefault={() => {
		dispatch('close', 'browser');
	}}
	on:mousedown={() => {
		if (isDialog) dispatch('close', 'click');
	}}
>
	<Sheet
		bind:container={sheet}
		on:wheel={(e) => (height += e.deltaY)}
		on:touchstart={(e) => {
			isDragging = true;
			startY = e.touches[0].clientY;
		}}
	>
		{#if showHandle}
			<div
				class="bottom-handler"
				on:mousedown|preventDefault={(e) => {
					isDragging = true;
					startY = e.clientY;
				}}
			>
				<button on:click={moveSheet} />
			</div>
		{/if}
		<slot />
	</Sheet>
</svelte:element>
