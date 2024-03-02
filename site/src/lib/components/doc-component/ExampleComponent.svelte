<script lang="ts">
	import Icon from '@iconify/svelte';
	import Button from '../actions/buttons/button.svelte';
	import { browser } from '$app/environment';

	export let copy: string;

	let showCode = false;
	let copied = false;
	let copyTimeout: ReturnType<typeof setTimeout>;

	let showCodeToggle = () => (showCode = !showCode);
	let handleCodeCopy = () => {
		if (!browser) return;

		window.navigator.clipboard.writeText(copy);

		copied = true;
		clearTimeout(copyTimeout);
		copyTimeout = setTimeout(() => copied = false, 5000);
	};
</script>

<div class="border border-gray-200 rounded-lg rounded-b-none border-primary">
	<div
		class="flex w-full grid-cols-3 p-5 border-b bg-secondary-container rounded-lg rounded-b-none sm:grid"
	>
		<div class="flex items-center space-x-3 font-medium">
			<Button class="w-44" filled onClick={showCodeToggle}>
				<Icon icon="ph:code-bold" />
				{#if showCode}
					<span>Hidden Code</span>
				{:else}
					<span>Show Code</span>
				{/if}
			</Button>
		</div>
		<div class="items-center col-start-3 hidden mx-auto space-x-3 lg:flex">
			<Button>
				<Icon icon="lucide:monitor" />
			</Button>
			<Button>
				<Icon icon="teenyicons:tablet-outline" />
			</Button>
			<Button>
				<Icon icon="bi:phone"/>
			</Button>
		</div>
	</div>
	<div
		class="relative py-10 px-10 w-full rounded-t-none sm:text-sm border-primary"
	>
		{#if showCode}
			<slot name="code" />
			<Button onClick={handleCodeCopy} class="absolute top-2 right-0">
				<span class="flex justify-center items-center text-primary transition-all hover:bg-background-hover w-10 h-10">
					<Icon icon="uiw:copy" width="1.2rem" height="1.2rem" />
				</span>
			</Button>
		{:else}
			<slot name="component" />
		{/if}
		{#if copied}
			<div class="absolute flex items-center gap-1 bottom-3 h-4 opacity-100 animate-up left-[45%] text-primary">
				<Icon icon="lucide:check-check" />
				<span>Copied</span>
			</div>
		{/if}
	</div>
</div>