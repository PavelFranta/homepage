<script lang="typescript">
  import { fly } from 'svelte/transition';

  export let component;
  export let index;
  let shouldScale = false;

  setTimeout(() => {
    setTimeout(() => {
      shouldScale = true;
    }, index * 400);
  
    setTimeout(() => {
      shouldScale = false;
    }, index * 600);
  }, 400);
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
