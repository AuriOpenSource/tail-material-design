<script>
	import Button from '$lib/components/button.svelte';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<ul class="list">
	<li class="item">
		<div class="list-item-body">
			<div class="list-item-headline">With icon</div>
		</div>
		<svg
			class="trailing-icon"
			xmlns="http://www.w3.org/2000/svg"
			height="24px"
			viewBox="0 0 24 24"
			width="24px"
			fill="#000000"
			><path d="M0 0h24v24H0V0z" fill="none" /><path
				d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
			/></svg
		>
	</li>
	<li class="item list-lines-1">
		<img class="avatar" src="https://placedog.net/128/128" alt="dog" />
		<div class="list-item-body">
			<div class="list-headline">One with avatar</div>
		</div>
	</li>
	<li class="item list-lines-1">
		<div class="list-item-body">
			<div class="list-headline">Headline One</div>
		</div>
	</li>
	<li class="item list-lines-2">
		<div class="list-item-body">
			<div class="list-headline">Healine Two</div>
			<div class="list-description">Description 2</div>
		</div>
	</li>
	<li class="item list-lines-3">
		<div class="list-item-body">three lines</div>
	</li>
	<button class="item">four</button>
</ul>

<Button />
<div class="my-4 flex flex-col gap-2">
	<hr class="divider divider-middle text-outline-variant" />
	<hr class="divider divider-right text-outline-variant" />
	<hr class="divider divider-list-inset text-outline-variant" />
	<hr class="divider text-outline-variant" />
</div>
<div class="flex gap-2">
	<button class="fab fab-small bg-primary-container">
		<div class="layer" />
		Add
	</button>
	<button class="fab fab-normal bg-primary-container">
		<div class="layer" />
		Add
	</button>
	<button class="fab fab-large bg-primary-container">
		<div class="layer" />
		ADD
	</button>
</div>

<div class="flex flex-col gap-2">
	<div class="card interactive-bg-surface-variant">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quos delectus explicabo magnam
		harum, consequuntur facilis aliquid quia qui, sint, ullam ad? Velit beatae maxime blanditiis
		ipsa. At, provident dolores.
	</div>
	<div class="card card-outlined">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quos delectus explicabo magnam
		harum, consequuntur facilis aliquid quia qui, sint, ullam ad? Velit beatae maxime blanditiis
		ipsa. At, provident dolores.
	</div>
	<div class="card card-filled">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quos delectus explicabo magnam
		harum, consequuntur facilis aliquid quia qui, sint, ullam ad? Velit beatae maxime blanditiis
		ipsa. At, provident dolores.
	</div>
</div>

<form class="inline-flex">
	<fieldset>
		<div class="radio-container">
			<input class="radio-input" id="zenon" checked name="test" type="radio" />
			<label for="zenon">Zenon</label>
			<!-- <div class="radio-layer" /> -->
		</div>
		<div class="radio-container">
			<input class="radio-input" id="mira" name="test" type="radio" />
			<label for="mira">Mira</label>
			<!-- <div class="radio-layer" /> -->
		</div>
	</fieldset>
	<fieldset>
		<div class="radio-container">
			<input class="radio-input-secondary" id="blaze" checked name="test2" type="radio" />
			<label for="blaze">Blaze</label>
			<!-- <div class="radio-layer" /> -->
		</div>
		<div class="radio-container">
			<input class="radio-input-secondary" id="vibe" name="test2" type="radio" />
			<label for="vibe">vibe</label>
			<!-- <div class="radio-layer" /> -->
		</div>
	</fieldset>
</form>

<form>
	<fieldset>
		<div class="checkbox-container">
			<input id="item1" type="checkbox" class="checkbox" />
			<label for="item1">item1</label>
		</div>
		<div class="checkbox-container">
			<input id="item2" type="checkbox" class="checkbox" />
			<label for="item2">item2</label>
		</div>
	</fieldset>
</form>
