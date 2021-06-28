<script lang="typescript">
  import { fly } from 'svelte/transition';

  export let component;
  export let index;

  </script>

<div 
  in:fly={{ y: 200, duration: 500 }}
  class="nav-item p-2 hover:cursor-pointer"
>
	<svelte:component this={component} />
</div>

<style>
  .nav-item :global(svg) {
    height: 2.5rem;
    width: 2.5rem;
  }

  .scale15 {
    transition: all 500ms;
    transform: scale(1.5);
    color:firebrick;
  }

  .scale1 {
    transition: all 500ms;
    transform: scale(1);
  }

  .nav-item:hover {
    animation: pulse 1s infinite;
  }

  @keyframes pulse {
	0% {
		transform: scale(1);
	}

	70% {
		transform: scale(1.5);
    color: firebrick
	}

	100% {
		transform: scale(1);
	}
}
</style>
