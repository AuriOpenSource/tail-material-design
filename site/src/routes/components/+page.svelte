<script lang="ts">
	import Button from '$lib/components/actions/buttons/button.svelte';
	import ExampleComponent from '$lib/components/doc-component/ExampleComponent.svelte';
	import CodeView from '$lib/components/doc-component/CodeView.svelte';

	const test = `
		<script>
			import &#123; Button &#125; from 'tail/actions';
		&lt;/script&gt;
	`
</script>

<div class="min-h-full flex justify-center items-center">
	<ExampleComponent>
		<div slot="component">
			<Button filled>Clica em eu</Button>
		</div>
		<div slot="code">
			<CodeView code={"// declare no seu script"} />
			<CodeView code ="import &#123; Button &#125; from 'tail/actions';" />
			<br>
			<CodeView code="<Button>Clica em eu</Button>" />
			
		</div>
	</ExampleComponent>
</div>
