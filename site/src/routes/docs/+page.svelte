<script lang="ts">
	import { Card } from '$lib/components/containment/card';

	export let data;
</script>

<h1 class="text-display-large">Overview</h1>

<section class="grid">
	{#each data.docs as doc}
		<a class="contents group" href="/docs/{doc.slug}" style:--clr={doc.theme}>
			<Card class="w-[394px] h-[336px] p-0 bg-surface-variant/10 group-hover:bg-[var(--clr)] transition-colors duration-500">
				<figure class="bg-[var(--clr)] rounded-b-3xl group-hover:bg-surface transition-colors duration-500">
					<img style="height: 197px;" src={doc.thumb} alt="thumbnail for {doc.title}" />
				</figure>

				<div class=" h-full p-8 ">
					<h2 class="text-headline-medium">{doc.title}</h2>
					<p class="text-body-large">{doc.description}</p>
				</div>
			</Card>
		</a>
	{/each}
</section>
