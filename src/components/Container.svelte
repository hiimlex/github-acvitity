<script lang="ts">
import {fetchLorem} from '../api/services/git'

const fetchGitActivity = async () => {
	const data = await fetchLorem();

	console.log(data);
}

fetchGitActivity();
</script>

<div class="container">
	<h1 class="header-title">
		MyGithub Activities
	</h1>
</div>

<style>
	.container {
		width: 80%;
		height: auto;
		max-height: 100%;
		margin: 0 auto;
		padding: 12px;
	}

	.header-title {
		font-size: 2em;
		margin: 0;
		padding: 0;
		font-weight: 600;
		text-align: center;
	}
</style>

