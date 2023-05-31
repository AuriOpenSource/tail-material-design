<script lang="ts">
	export let name: string;
	export let checked: boolean | null | undefined = false;
	export let secondary: boolean | null | undefined = false;
	export let id = `input-radio${Math.random() * 99}`;
	export let disabled = false;
</script>

<div class="radio-container">
	<input
		class="{secondary ? 'radio-input-secondary' : 'radio-input-primary'} radio-input"
		{checked}
		{id}
		{name}
		{disabled}
		type="radio"
	/>
	<div class="radio-layer" />
</div>
