<script lang="ts">
	import type { GithubEvent } from "../api/models/githubEvent";
	import { getIconType } from "../utils/getIconType";

	export let event: GithubEvent;

	const formatDate = (date: Date) => {
		const _date = new Date(date);
		const formatedMonth =
			_date.getMonth() + 1 > 9
				? _date.getMonth() + 1
				: "0" + (_date.getMonth() + 1);

		return `${_date.getDate()}/${formatedMonth}/${_date.getFullYear()}`;
	};
</script>

{#if event}
	<div class="event">
		<div class="event-type">
			{@html getIconType(event.type)}
			<span style="margin-left: 4px;">{event.type}</span>
		</div>
		<div class="info">
			<span>
				<b>Author</b>: {event.actor.login} on
			</span>
			<span>
				<a class="link" href={event.repo.url} target="_blank"
					>{event.repo.name}</a
				>
			</span>
		</div>
		{#if event.created_at}
			<div class="date">
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
		background-color: #444;
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

	.info {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
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

	@media only screen and (max-width: 768px) {
		.event {
			flex-direction: column;
			align-items: flex-start;
		}

		.info {
			justify-content: flex-start;
			align-items: flex-start;
		}

		.event * {
			margin: 2px 0;
		}

		.date {
			align-self: flex-end;
		}
		span {
			font-size: 0.9rem;
		}
	}
</style>
