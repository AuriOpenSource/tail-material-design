<script context="module">
	import '../post.pcss';
	import 'nue-glow/css/glow.css'
	import 'nue-glow/css/markers.css'

	import { a, blockquote, h1, h2, h3, hr, img, li, ol, p, pre, table, td, th, tr, ul } from './index';
	export { a, blockquote, h1, h2, h3, hr, img, li, ol, p, pre, table, td, th, tr, ul };
</script>

<script lang="ts">
	export let title = '';
	export let description = '';
</script>

<slot
	{title}
	{description}
/>
