<script>
	import { onMount } from 'svelte';
	import Navbar from '../components/Navbar.svelte';
	import Card from '../components/Card.svelte';
	import { getCurrentSeasonAnimes } from '../api/shikimori';

	let seasonalAnimes = [];
	let loading = true;
	onMount(async () => {
		await fetchSeasonal();
	});

	async function fetchSeasonal() {
		loading = true;
		let response = await getCurrentSeasonAnimes();
		seasonalAnimes = response;
		loading = false;
        console.log(seasonalAnimes);
	}
</script>

<main>
    <div class="header">
        
    </div>
	<div class="content">
		{#if loading}
			<h3>Loading</h3>
		{:else}
			<Card data={seasonalAnimes} />
		{/if}
	</div>
</main>

<style>
	:global(body) {
		background-color: #012444;
		font-family: sans-serif;
		margin: 0;
		padding: 0;
	}
	.content {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
