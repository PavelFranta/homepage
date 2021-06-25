<script lang="typescript">
  import { fly } from 'svelte/transition';

  export let component;
  export let scaleAfter;
  let shouldScale = false;

  setTimeout(() => {
    shouldScale = true;
  }, scaleAfter);

  setTimeout(() => {
    shouldScale = false;
  }, scaleAfter + 600)
</script>

<div 
  in:fly={{ y: 200, duration: 500 }}
  class:scale15={shouldScale}
  class:scale1={!shouldScale}
  class="px-2">
	<svelte:component this={component} />
</div>

<style>
  .scale15 {
    transition: all 600ms;
    transform: scale(1.5);
  }

  .scale1 {
    transition: all 600ms;
    transform: scale(1);
  }
</style>
