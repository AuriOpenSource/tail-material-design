<script lang="ts">
	import { tweened } from 'svelte/motion';

	export let value: number;
	export let step: number = 1;
	export let accuracy: 'none' | 'value' | 'ticks' = 'value';
	export let disabled: false | true | 'hide-value' = false;

	let rangeElem: HTMLInputElement, range: number, percent: number;
	$: {
		const max = Number(rangeElem?.max || 100);
		const min = Number(rangeElem?.min || 0);
		range = max - min;
		percent = ($valueDisplayed - min) / range;
	}
	const valueDisplayed = tweened(value || 0, { duration: 200 });
	const updateValue = (e: any) => {
		value = Number(e.target.value);
		e.target.value = $valueDisplayed;
		$valueDisplayed = value;
	};
	$: $valueDisplayed = value;
	const generateTicks = (size: number, step: number) =>
		Array.from({ length: size / step + 1 }, (_, i) => i * (step / size) * 100);
</script>

<div class="slider" class:slider-show-value={accuracy != "none"} style="--percent: {percent * 100}%;">
	<input
		class="slider-input"
		type="range"
		bind:this={rangeElem}
		value={$valueDisplayed}
		{step}
		disabled={Boolean(disabled)}
		on:input={updateValue}
	/>
	<div class="slider-track" />
	{#if accuracy == 'ticks'}
		{#each generateTicks(range, step) as tick}
			<div
				class="slider-tick"
				class:active={tick / 100 < value / range}
				style="left: calc({tick}% + {tick * (-4 / 100) + 1}px);"
			/>
		{/each}
	{/if}
	<div class="slider-thumb" />
	<div class="slider-layer" />
	<div class="slider-value">
        <span class="text-label-medium">{value}</span>
    </div>
</div>
