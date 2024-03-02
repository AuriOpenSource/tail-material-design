<script lang="ts">
	import { button } from '$lib/utils/examples';
	import { ExampleComponent, CodeBlock } from '$lib/components/doc-component';
	import Button from '$lib/components/actions/buttons/button.svelte';

</script>

<div class="min-h-full flex justify-center items-center">
	<ExampleComponent copy={button.filled.copy}>
		<div class="flex items-center gap-3" slot="component">
			<Button filled>Click</Button>
		</div>
		<div slot="code">
			<CodeBlock lang="html">
				{button.filled.html}
			</CodeBlock>
		</div>
	</ExampleComponent>
</div>
