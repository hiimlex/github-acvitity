<script lang="ts">
	export let src: string;
	export let author: string;

</script>

<div class="card">
	{#if src}
		<img {src} alt={author}/>
	{:else}
		<p>No image</p>
	{/if}

	{#if author}
	<p>Author: {author}</p>
	{:else}
		<p>No author</p>
	{/if}
</div>

<style>
	.card {
		background-color: #f5f5f5;
		border: 1px solid #ccc;
		border-radius: 4px;
		margin-bottom: 12px;
	}

	img {
		max-width: 100%;
		height: auto;
	}

	p {
		padding: 12px;
		font-size: 1rem;
		font-weight: 400;
	}
</style>



