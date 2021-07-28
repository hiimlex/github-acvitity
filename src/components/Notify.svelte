<script lang="ts">
	export let msg: string;
	export let success: boolean = false;
</script>

<div class="notify">
	<div class="notify-message" >
		{msg}
	</div>
</div>



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
		bottom: 0;
		right: -100vw;
		margin: 6px;
		width: calc(100% - 28px);
		display: flex;
		flex: 1;
		padding: 8px;
		border-radius: 4px;

		color: #efefef;

		font-size: 1rem;

		-webkit-animation: slide 0.5s forwards;
		animation: slide 0.5s forwards;
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

