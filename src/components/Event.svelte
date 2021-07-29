<script lang="ts">
	import type { GithubEvent } from "../api/models/githubEvent";
	import { getIconType } from "../utils/getIconType";

	export let event: GithubEvent;

	const formatDate = (date: Date) => {
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const formmated_month = month < 10 ? `0${month}` : month;
		const day = date.getDate();

		return `${day}/${formmated_month}/${year}`;
	};
</script>

{#if event}
	<div class="event">
		<div class="event-type">
			{@html getIconType(event.type)}
			<span style="margin-left: 4px;">{event.type}</span>
		</div>
		<span
			><b>Author</b>: {event.actor.login} on
			<a class="link" href={event.repo.url} target="_blank">{event.repo.name}</a
			>
		</span>

		{#if event.created_at}
			<div>
				<span style="margin-right: 4px;"><i class="feather-calendar" /></span>
				<span> {formatDate(event.created_at)}</span>
			</div>
		{/if}
	</div>
{/if}

<style>
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
		justify-content: space-between;
		width: calc(100% - 24px);
	}

	.event-type {
		font-size: 1.1rem;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}

	span {
		font-size: 1.1rem;
	}

	.link {
		color: rgb(56, 109, 224);
		text-decoration: none;

		transition: all 0.2s ease-in;
	}

	.link:hover {
		color: rgb(60, 116, 236);
		text-decoration: underline;
	}
</style>
