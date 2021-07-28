<script>
	import { useNavigate, useLocation } from "svelte-navigator";
	import { user } from "../store/stores";

	const navigate = useNavigate();
	const location = useLocation();

	const github_user = JSON.parse(localStorage.getItem("github_user")) || {};

	$: if (github_user && Object.keys(github_user).length > 0) {
		$user = { github_user };
		navigate("/", { replace: true });
	} else {
		navigate("/login", { replace: true });
	}

	$: if (!$user) {
		navigate("/login", {
			state: { from: $location.pathname },
			replace: true,
		});
	}
</script>

{#if $user}
	<slot />
{/if}
