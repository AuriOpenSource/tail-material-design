<script lang="ts">
    export let container: HTMLDivElement | null = null;
  </script>
  
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="bottom-content"
    bind:this={container}
    on:wheel|preventDefault
    on:touchstart|preventDefault
    on:mousedown|stopPropagation
  >
    <slot />
  </div>
  