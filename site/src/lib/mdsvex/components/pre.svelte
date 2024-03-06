<script lang="ts">
	import { browser } from '$app/environment';
	import { cn } from '$lib/utils';
	import { writable } from 'svelte/store';
	import { e } from 'vitest/dist/index-5aad25c1';

	function createCopyCodeButton() {
		let codeString = '';
		const copied = writable(false);
		let copyTimeout = 0;

		function copyCode() {
			if (!browser) return;
			navigator.clipboard.writeText(codeString);
			copied.set(true);
			clearTimeout(copyTimeout);
			copyTimeout = window.setTimeout(() => {
				copied.set(false);
			}, 2500);
		}

		function setCodeString(node: HTMLElement) {
			codeString = node.innerText.trim() ?? '';
		}

		return {
			copied,
			copyCode,
			setCodeString
		};
	}

	const { copied, copyCode, setCodeString } = createCopyCodeButton();
	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<pre class={cn('bg-error', className)} use:setCodeString>
<slot />
</pre>

<button class="btn btn-filled" on:click={copyCode}>
	{#if $copied}
		S
	{:else}
		N
	{/if}
</button>
