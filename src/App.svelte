<script lang="ts">
  import Lorem from './components/Lorem.svelte';

	import Header from './components/Header.svelte';

	import axios from 'axios';

	interface Lorem {
		id: string;
		author: string;
		download_url: string;
	}

	const fetchLorem = async (): Promise<Lorem[]> => {
		try {
			const response = await axios.get('https://picsum.photos/v2/list');
			return response.data;
		}	catch(err){
			console.log(err);
		}
	}
</script>

<Header />

<main>
	<div class="list">
		{#await fetchLorem() then list}
			{#if list && list.length > 0}
				{#each list as lorem}
						<Lorem author={lorem.author} src={lorem.download_url}/>
				{/each}
				{:else}
					<p class="no-lorem">No lorem ipsum...</p>
			{/if}
		{/await}
	</div>
</main>

<style>
	main {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-items: center;
	}

	.list {
		width: calc(100% - 20px);
		padding: 24px;
		column-count: 2;
		-moz-column-count: 2;
		-webkit-column-count: 2;
		-moz-column-gap: 30px;
		-webkit-column-gap: 30px;
		column-gap: 30px;
	}

	.no-lorem {
		text-align: center;
		font-size: 1.5em;
		color: #363636;
	}
</style>
