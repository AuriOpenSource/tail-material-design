<script lang="ts">
	import hljs from 'highlight.js';

	type $$Props = {
		// lang: string;
		code: string;
	};

	// export let lang: string;
	export let code: string;

	let content = hljs.highlightAuto(code, ['html', 'javascript']).value;
</script>

<pre>
    <code
		class="highlighted-code"
		class:whitespace-normal={true}
		class:line-numbers={true}
		class:text-lg={true}>
        {@html content}
    </code>
</pre>
<slot />
