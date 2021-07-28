<script lang="ts">
	import Notify from "../components/Notify.svelte";
	import { useNavigate, useLocation } from "svelte-navigator";
	import { user } from "../store/stores";
	import { getUser } from "../api/services/git";

	const navigate = useNavigate();
	const location = useLocation();

	let username: string;
	let hasError: boolean;
	let errorMsg: string;
	let logged = false;

	// const github_user = JSON.parse(localStorage.getItem("github_user")) || {};

	// $: if (github_user) {
	// 	$user = { github_user };
	// 	navigate("/", { replace: true });
	// }

	const handleLogin = async () => {
		if (username) {
			try {
				hasError = false;
				const data = await getUser(username);

				$user = { data };
				localStorage.setItem("github_user", JSON.stringify(data));
				logged = true;

				setTimeout(() => {
					navigate("/", { replace: true });
				}, 500);
			} catch (err) {
				console.log(err);

				hasError = true;
				errorMsg = "User Not Found :(";

				setTimeout(() => {
					hasError = false;
				}, 2000);
			}
		} else {
			hasError = true;
			errorMsg = "Hey'o Username is required :)";
			setTimeout(() => {
				hasError = false;
			}, 2000);
		}
	};
</script>

{#if hasError}
	<Notify msg={errorMsg} />
{/if}

{#if logged}
	<Notify msg="Success on sign in, have fun :*" success={true} />
{/if}

<div class="login-container">
	<div class="login-content">
		<div class="login-title">
			<i class="feather-github" />
			<h1>Login</h1>
			<h3>Insert your github user to sign in</h3>
		</div>
		<div class="login-form">
			<div class="form-group">
				<label for="username"> Username </label>
				<input
					type="text"
					class="form-control"
					id="username"
					name="username"
					placeholder="Username"
					bind:value={username}
				/>
			</div>
			<div class="form-group">
				<button type="submit" on:click={handleLogin} class="btn btn-primary"
					>Login</button
				>
			</div>
		</div>
	</div>
</div>

<style>
	.login-container {
		height: 100vh;
		width: auto;
		max-width: 1028px;

		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.login-content {
		background: #444;
		width: 80vw;
		max-width: 682px;
		height: auto;
		padding: 24px;
		border-radius: 8px;
		text-align: center;

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.login-title i {
		font-size: 3rem;
		margin: 0;
	}

	.login-title h1 {
		width: 100%;
		height: auto;
		font-size: 1.8rem;
		margin: 8px 0;
	}

	.login-title h3 {
		width: 100%;
		height: auto;
		font-weight: 600;
		font-size: 1.1rem;
		margin: 4px 0;
	}

	.login-form {
		width: 100%;
		height: auto;

		padding: 12px;

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.form-group {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 12px auto;
	}

	.form-group:first-child {
		margin-top: 0;
	}

	.form-group:last-child {
		margin-bottom: 0;
	}

	.form-group label {
		color: #fff;
		font-size: 1rem;
		text-align: center;
		align-self: flex-start;
		margin-bottom: 4px;
	}

	.form-group input {
		flex: 1;
		width: calc(100% - 24px);
		height: 18px;
		padding: 12px;
		border: 1px solid #fff;
		border-radius: 8px;
		font-size: 16px;
		outline: none;
		transition: all 0.3s ease-in-out;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		color: #333;
	}

	.form-group button {
		width: 100%;
		height: 50px;
		padding: 12px;
		border: 1px solid #fff;
		border-radius: 8px;
		font-size: 16px;
		outline: none;
		background: #444;
		color: #fff;
		font-weight: bold;
		text-align: center;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		transition: all 0.3s ease-in-out;
		cursor: pointer;
	}

	.form-group button:hover {
		background: #6d6d6d;
		border-color: #afafaf;
		color: #fff;
	}

	.form-group button:focus {
		background: #6d6d6d;
		border-color: #afafaf;

		color: #fff;
	}

	.form-group button:active {
		background: #6d6d6d;

		border-color: #afafaf;
		color: #fff;
	}
</style>
