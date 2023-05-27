<script>
	import { InputRadio, Button, InputRadioGroup } from '$lib/components';
	import Slider from '$lib/components/Slider.svelte';

	let chipSelected = false;
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

<form>
	<InputRadioGroup row inlineBlock>
		<InputRadio label="Zenon" name="test" checked />
		<InputRadio label="Mira" name="test" />
	</InputRadioGroup>

	<InputRadioGroup row inlineBlock>
		<InputRadio label="Blaze" name="test2" secondary checked />
		<InputRadio label="Vibe" name="test2" secondary />
	</InputRadioGroup>
</form>

<form class="flex flex-col gap-2">
	<label class="flex flex-row gap-2 items-center">
		<div class="checkbox-container">
			<input class="checkbox-input" type="checkbox" />
			<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M 4.83 13.41 L 9 17.585 L 19.59 7"
					fill="none"
					stroke="currentColor"
					stroke-width="1.41"
				/>
			</svg>
			<div class="checkbox-layer" />
		</div>
		<span>unchecked</span>
	</label>

	<label class="flex flex-row gap-2 items-center">
		<div class="checkbox-container">
			<input class="checkbox-input" type="checkbox" checked />
			<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M 4.83 13.41 L 9 17.585 L 19.59 7"
					fill="none"
					stroke="currentColor"
					stroke-width="1.41"
				/>
			</svg>
			<div class="checkbox-layer" />
		</div>
		<span>checked</span>
	</label>

	<label class="flex flex-row gap-2 items-center">
		<div class="checkbox-container">
			<input class="checkbox-input" type="checkbox" checked disabled />
			<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M 4.83 13.41 L 9 17.585 L 19.59 7"
					fill="none"
					stroke="currentColor"
					stroke-width="1.41"
				/>
			</svg>
			<div class="checkbox-layer" />
		</div>
		<span>checked</span>
	</label>
</form>

<div class="my-4 inline-flex gap-2">
	<div class="chips">
		<div class="chips-layer" />
		<button class="chips-content"> movies </button>
	</div>

	<div class="chips chips-assist">
		<div class="chips-layer" />
		<button class="chips-content"> assist </button>
	</div>

	<div class="chips chips-input">
		<div class="chips-layer" />
		<button class="chips-content"> input </button>
	</div>

	<div class="chips chips-filter">
		<div class="chips-layer" />
		<button class="chips-content"> filter </button>
	</div>

	<div class="chips chips-suggestion {chipSelected ? 'chips-selected' : ''}">
		<div class="chips-layer" />
		<button on:click={() => (chipSelected = !chipSelected)} class="chips-content">
			suggestion
		</button>
	</div>

	<div class="chips chips-disabled">
		<div class="chips-layer" />
		<button class="chips-content"> disabled </button>
	</div>
</div>

<div class="my-4 flex flex-col gap-10">
	<Slider value={30} />
	<Slider value={50} accuracy="ticks" step={10}/>
	<Slider value={70} accuracy="ticks" disabled/>
</div>
