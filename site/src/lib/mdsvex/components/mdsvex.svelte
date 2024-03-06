<script context="module">
	import './post.pcss';

	import { a, blockquote, h1, h2, h3, hr, img, li, ol, p, table, td, th, tr, ul } from './index';
	export { a, blockquote, h1, h2, h3, hr, img, li, ol, p, table, td, th, tr, ul };
</script>

<script lang="ts">
	export let snippets = '';
	export let schemas = '';
	export let previews = '';
	export let keyboard = '';
	export let title = '';
	export let description = '';
	export let source = '';
	export let component = '';
	export let radix = '';
</script>

<slot
	{snippets}
	{schemas}
	{previews}
	{keyboard}
	{title}
	{description}
	{source}
	{component}
	{radix}
/>
