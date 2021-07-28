<script lang="ts">
	import { useNavigate } from 'svelte-navigator';
	import App from '../App.svelte';
	import {user} from '../store/stores';
	import Notify from './Notify.svelte';

	const navigate = useNavigate();

	let loggof = false;

	const handleLoggof = () => {
		loggof = true;
		setTimeout(() => {
			$user = null;
			localStorage.removeItem('github_user');
			navigate('/login', { replace: true });
		}, 500);
	}
</script>

{#if loggof}
	<Notify success msg="Shutting down all servers ... bip ... bop" />
{/if}


<div class="container">
	<h1 class="header-title">
		My Git Activities
	</h1>
	<span class="loggof" on:click={handleLoggof}>Loggof</span>
</div>

<style>
	.container {
		width: 80%;
		height: auto;
		max-height: 100%;
		margin: 0 auto;
		padding: 12px;

		position: relative;
	}


	.header-title {
		margin-top: 38px;
		font-size: 2em;
		padding: 0;
		font-weight: 600;
		text-align: center;
	}

	.loggof {
		font-size: 0.8rem;
		text-transform: uppercase;
		font-weight: bold;
		cursor: pointer;
		border: 1px solid #efefef;
		padding: 4px;
		border-radius: 4px;

		position: absolute;
		right: 0;
		top: 12px;
	}
</style>

