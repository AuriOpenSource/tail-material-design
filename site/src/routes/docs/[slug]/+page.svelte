<script lang="ts">
	export let data;
</script>

<article class="container">
	<svelte:component this={data.content}/>
</article>
