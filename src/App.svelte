<script>
  import Lorem from './components/Lorem.svelte';

	import Header from './components/Header.svelte';

	import axios from 'axios';

	const fetchLorem = async () => {
		try {
			const response = await axios.get('https://picsum.photos/v2/list');
			return response;
		}	catch(err){
			console.log(err);
			return err;
		}
	}
</script>

<Header />

<main>
	{#await fetchLorem() then response}
		{#if response.data}
			{#each response.data as lorem}
				<Lorem/>
			{/each}
		{/if}
	{/await}
</main>

<style>
	main {
		width: 100%;
		padding: 24px;
		margin: 12px;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-row-gap: 20px;
		grid-column-gap: 20px;
	}
</style>
