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
		<img src={user_value.avatar_url} alt={user_value.name} />
		<span class="text">Welcome {user_value.name}!</span>
	</div>
	<h1 class="header-title">My Git Activities</h1>
	<span class="loggof" on:click={handleLoggof}>Loggof</span>
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
		margin-top: 38px;
		font-size: 1.2rem;
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
		padding: 4px 8px;
		border-radius: 4px;

		position: absolute;
		right: 0;
		top: 12px;
	}

	.welcome {
		margin-top: 12px;
		font-size: 1.4rem;
		padding: 0;
		font-weight: 600;
		text-align: center;
	}

	.welcome img {
		width: 48px;
		height: 48px;
		margin: 0 auto;
		border-radius: 50%;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin-right: 4px;
	}

	.welcome span {
		margin-top: 12px;
		padding: 0;
		font-weight: 600;
		text-align: center;
	}
</style>
