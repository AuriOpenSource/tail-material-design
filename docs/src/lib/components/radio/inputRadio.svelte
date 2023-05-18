<script lang="ts">
    export let label: string;
    export let name: string;
    export let checked: boolean | null | undefined = false;
    export let secondary: boolean | null | undefined = false;
    
    const id = `input-radio${Math.random() * .99}`

</script>

<div class="radio-container">
    <input class={secondary ? "radio-input secondary" : "radio-input"} {checked} id={id} {name} type="radio" />
    <label for={id}>{label}</label>
    <!-- <div class="radio-layer" /> -->
</div>