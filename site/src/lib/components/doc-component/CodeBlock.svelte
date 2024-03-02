<script lang="ts">
	import hljs from 'highlight.js';
	import { onMount } from 'svelte';

	type $$Props = {
		lang: 'html' | 'javascript';
	};

	export let lang: string;

	onMount(() => {
		hljs.highlightAll();
	});
</script>
<div>
	<pre><code class={lang}><slot/></code></pre>
</div>

<style>
	.html, .javascript {
		@apply p-0;
	}
</style>
