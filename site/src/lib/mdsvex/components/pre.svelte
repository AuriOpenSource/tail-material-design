<script lang="ts">
	import { browser } from '$app/environment';
	import { writable } from 'svelte/store';

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
	// let className: string | undefined | null = undefined;
	// export { className as class };
</script>

<div class="code-block">
	<button class="copy" on:click={copyCode}></button>
	<pre glow use:setCodeString>
		<slot />
	</pre>
</div>