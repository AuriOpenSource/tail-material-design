<script lang="ts">
	export let disabled = false;
	export let checked = false;

	let startX: number | null;
	const handleMouseUp = (e: MouseEvent) => {
		if (!startX) return;
		const distance = e.clientX - startX;
		if (distance > 16 && !checked) checked = true;
		if (distance < -16 && checked) checked = false;
		startX = null;
	};
</script>

<svelte:window on:mouseup={handleMouseUp} />
<div class="switch" on:mousedown={(e) => (startX = e.clientX)}>
	<input
		class="switch-input"
		type="checkbox"
		bind:checked
		{disabled}
		on:keydown={(e) => {
			if (e.code == 'Enter') checked = !checked;
			if (e.code == 'ArrowLeft') checked = false;
			if (e.code == 'ArrowRight') checked = true;
		}}
	/>
	<!-- svelte-ignore a11y-click-events-have-key-events (if you have a better idea lmk) -->
	<div class="switch-layer" on:mousedown={(e) => (startX = e.clientX)} />
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="24px"
		viewBox="0 0 24 24"
		width="24px"
		fill="#000000"
		><path d="M0 0h24v24H0V0z" fill="none" /><path
			d="M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
		/></svg
	>
</div>
