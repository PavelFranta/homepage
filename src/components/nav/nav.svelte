<script lang="typescript">
	import Rocket32 from 'carbon-icons-svelte/lib/Rocket32';
	import PersonFavorite32 from 'carbon-icons-svelte/lib/PersonFavorite32';
	import Bee32 from "carbon-icons-svelte/lib/Bee32";
	import Star32 from "carbon-icons-svelte/lib/Star32";
	import Fish32 from "carbon-icons-svelte/lib/Fish32";
	import Fire32 from "carbon-icons-svelte/lib/Fire32";
	import PalmTree32 from "carbon-icons-svelte/lib/PalmTree32";
	import WindyStrong32 from "carbon-icons-svelte/lib/WindyStrong32";
	import Sunny32 from "carbon-icons-svelte/lib/Sunny32";

	import NavItem from './nav-item.svelte';

	interface menuItem {
		component: any;
		routeName: string;
	}

	const menuItems: menuItem[] = [
		{
			component: Rocket32,
			routeName: ''
		},
		{
			component: Sunny32,
			routeName: ''
		},
		{
			component: PersonFavorite32,
			routeName: ''
		},
		{
			component: Bee32,
			routeName: ''
		},
		{
			component: Fire32,
			routeName: ''
		},
		{
			component: Star32,
			routeName: ''
		},
		{
			component: PalmTree32,
			routeName: ''
		},
		{
			component: WindyStrong32,
			routeName: ''
		},
		{
			component: Fish32,
			routeName: ''
		}
	];

	let delayedVisibility = false;

	setTimeout(() => {
		delayedVisibility = true;
	}, 1);

  setTimeout(() => {
    
  }, 1200);
</script>

<nav class="flex p-3 justify-end">
	{#if delayedVisibility}
		{#each menuItems as {component}, index}
			<NavItem component={component} index={index + 1}/>
		{/each}
	{/if}
</nav>
