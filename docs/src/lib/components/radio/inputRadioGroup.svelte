<script lang="ts">
	export let row: boolean | null | undefined = false;
	export let inlineBlock: boolean | null | undefined = false;
	export let sx: Partial<CSSStyleDeclaration> | null | undefined = undefined;

	let isActiveRow = row ? 'row' : '';
	let isActiveInlineBlock = inlineBlock ? 'inline-block' : '';

	let stringClass: string = `radio-group ${isActiveRow} ${isActiveInlineBlock}`;
</script>

<fieldset class={stringClass}>
	<slot />
</fieldset>
