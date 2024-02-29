<script lang="ts">
	import Button from '../actions/buttons/button.svelte';

	let showCode = false;
	let showCodeToggle = () => showCode = !showCode
</script>

<div
	class="border border-gray-200 rounded-lg rounded-b-none border-primary"
>
	<div class="flex justify-between w-full grid-cols-3 p-5 border-b bg-secondary-container rounded-lg rounded-b-none sm:grid">
		<div class="flex items-center space-x-3 text-lg font-medium text-gray-500 dark:text-gray-400">
			<Button class="w-44" filled onClick={showCodeToggle}>
				<svg
					class="w-3.5 h-3.5 mr-2"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 20 16"
					><path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
					/></svg
				>
				{#if showCode}
					<span>Hidden Code</span>
				{:else}
					<span>Show Code</span>
				{/if}
			</Button>
		</div>
		<div class="items-center hidden mx-auto space-x-3 lg:flex">
			<Button>Monitor</Button>
			<Button>Tablet</Button>
			<Button>Phone</Button>
		</div>
		<div class="flex items-center col-span-2 ml-auto space-x-3 lg:col-span-1">
			<select>
				<option value="font">font</option>
				<option value="font">font</option>
				<option value="font">font</option>
			</select>
			<div class="relative">
				<Button>Cor</Button>
			</div>
			<Button>Tema</Button>
		</div>
	</div>
	<div
		class="my-10 px-10 w-full text-gray-900 border-gray-200 rounded-t-none shadow-sm sm:text-sm border-primary dark:text-white block-canvas"
	>
		{#if showCode}
			<slot name="code" />
		{:else}
			<slot name="component" />
		{/if}
	</div>
</div>
