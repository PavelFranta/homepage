<script lang="typescript">
	import { fly } from 'svelte/transition';

	let delayedStart = false;
	setTimeout(() => {
		delayedStart = true;
	}, 100);
</script>

{#if delayedStart}
	 <div in:fly={{x:300, duration:500}}>
		 index
	 </div>
{/if}
