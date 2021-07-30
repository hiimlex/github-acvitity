<script lang="ts">
	export let msg: string;
	export let success: boolean = false;

	let show = true;

	const handleShow = () => {
		setTimeout(() => {
			show = false;
		}, 3000);
	};

	const closeNotify = () => {
		show = false;
	};

	handleShow();
</script>

{#if show}
	<div class="notify" on:click={closeNotify}>
		<div class="notify-message">
			{msg}
		</div>
	</div>
{/if}

{#if success}
	<style>
		.notify {
			background: #24bc12;
		}
	</style>
{:else}
	<style>
		.notify {
			background: #cd1212;
		}
	</style>
{/if}

<style>
	.notify {
		position: absolute;
		top: 0;
		right: -100vw;
		margin: 6px;
		width: calc(100% - 36px);
		display: flex;
		flex: 1;
		padding: 12px;
		border-radius: 4px;

		color: #efefef;

		font-size: 1rem;

		-webkit-animation: slide 0.5s forwards;
		animation: slide 0.5s forwards;

		z-index: 9999;
		transition: all 0.3s ease-in-out;
		cursor: pointer;
	}

	.notify:hover {
		opacity: 0.9;
	}

	@-webkit-keyframes slide {
		100% {
			right: 0;
		}
	}

	@keyframes slide {
		100% {
			right: 0;
		}
	}
</style>
