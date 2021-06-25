<script lang="typescript">
	import Rocket32 from 'carbon-icons-svelte/lib/Rocket32';
	import Raw32 from 'carbon-icons-svelte/lib/Raw32';
	import PersonFavorite32 from 'carbon-icons-svelte/lib/PersonFavorite32';
	import IceAccretion32 from 'carbon-icons-svelte/lib/IceAccretion32';
	import NavItem from './nav-item.svelte';

	interface menuItem {
		component: any;
		text: string;
		routeName: string;
	}

	const menuItems: menuItem[] = [
		{
			component: Rocket32,
			text: 'rocket',
			routeName: ''
		},
		{
			component: Raw32,
			text: 'raw',
			routeName: ''
		},
		{
			component: PersonFavorite32,
			text: 'personalFavorite',
			routeName: ''
		},
		{
			component: IceAccretion32,
			text: 'IceAcceretion',
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
			<NavItem component={component} scaleAfter={(index + 1) * 200}/>
		{/each}
	{/if}
</nav>

<style>
</style>
