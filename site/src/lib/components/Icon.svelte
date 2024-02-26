<script lang="ts">
	export let d: string;
	export let width = 24;
	export let height = width;
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	height={height + 'px'}
	width={width + 'px'}
	viewBox="0 0 24 24"
>
	<path {d} />
</svg>
