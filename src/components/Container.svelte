<script lang="ts">
	import { useNavigate } from "svelte-navigator";
	import { getActivity } from "../api/services/git";
	import { user } from "../store/stores";
	import { getIconType } from "../utils/getIconType";

	import Notify from "./Notify.svelte";

	const navigate = useNavigate();

	let loggof = false;

	let user_value;

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
	<h1 class="header-title">My Git Activities</h1>
	<span class="loggof" on:click={handleLoggof}>Loggof</span>
	{#if user_value}
		{#await getActivity(user_value.login) then events}
			{#if events}
				{#each events as event}
					<div class="event">
						<div class="event-type">
							{#if event.type}
								{@html getIconType(event.type)}
								<span style="margin-left: 4px;">{event.type}</span>
							{:else}
								<i class="feather-github" />
							{/if}
						</div>
					</div>
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
		font-size: 2.2rem;
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

	.event {
		margin-top: 18px;
		margin-bottom: 18px;
		padding: 12px;
		border-radius: 4px;
		background-color: #555;
		box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.1);

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
	}

	.event-type {
		font-size: 1.1rem;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
</style>
