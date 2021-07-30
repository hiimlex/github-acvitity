<script lang="ts">
	import { useNavigate } from "svelte-navigator";
	import { getActivity } from "../api/services/git";
	import type { GithubAccount } from "../api/models/githubAccount";
	import { user } from "../store/stores";
	import Event from "./Event.svelte";
	import Notify from "./Notify.svelte";

	const navigate = useNavigate();

	let loggof = false;

	let user_value: GithubAccount;

	const handleLoggof = () => {
		loggof = true;
		setTimeout(() => {
			$user = null;
			localStorage.removeItem("github_user");
			navigate("/login", { replace: true });
		}, 500);
	};

	user.subscribe((value) => {
		if (value) {
			user_value = value.github_user;
		} else {
			user_value = null;
		}
	});
</script>

{#if loggof}
	<Notify success msg="Shutting down all servers ... bip ... bop" />
{/if}

<div class="container">
	<div class="welcome">
		<div class="avatar">
			<img src={user_value.avatar_url} alt={user_value.name} />
			<span class="text">Welcome, {user_value.login}!</span>
		</div>
		<span class="loggof" on:click={handleLoggof}
			><i class="feather-power" /></span
		>
	</div>

	<h1 class="header-title">My Git Activities</h1>
	{#if user_value}
		{#await getActivity(user_value.login) then events}
			{#if events}
				{#each events as event}
					<Event {event} />
				{/each}
			{/if}
		{/await}
	{:else}
		<span>Nothing here sorry</span>
	{/if}
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
		margin-top: 12px;
		font-size: 1.2rem;
		padding: 0;
		font-weight: 400;
		text-align: center;
	}

	.avatar {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.loggof {
		font-size: 1.2rem;
		text-transform: uppercase;
		font-weight: bold;
		cursor: pointer;
		padding: 12px !important;
		border-radius: 4px;
	}

	.loggof:hover {
		background: #444444ef;
	}

	.welcome {
		margin-top: 12px;
		font-size: 1.4rem;
		padding: 0;
		font-weight: 600;
		text-align: center;

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.welcome img {
		width: 48px;
		height: 48px;
		border-radius: 50%;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin-right: 12px;
	}

	.welcome span {
		margin: 0;
		padding: 0;
		font-weight: 600;
		text-align: center;
	}
</style>
