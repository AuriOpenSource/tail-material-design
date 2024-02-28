<script lang="ts">
	import { Card } from '$lib/components/containment/card';

	export let data;

	console.log(data);
</script>

<section>
	{#each data.docs as doc}
		<Card outlined>
			<figure><img src={doc.thumb} alt="thumbnail for {doc.title}" /></figure>

			<div class="bg-surface">
				{doc.description}
			</div>
		</Card>
	{/each}
</section>
