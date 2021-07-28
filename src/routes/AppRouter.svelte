<script lang="ts">
	import { Router, Route } from 'svelte-navigator';
	import PrivateRoute from './PrivateRoute.svelte';

	import Home from '../pages/Home.svelte';
	import Login from '../pages/Login.svelte';

</script>

<div class="content">
	<Router>
		<Route path="login" primary={true}>
			<Login></Login>
		</Route>
		<PrivateRoute path="/" let:location>
			<Home></Home>
		</PrivateRoute>
	</Router>
</div>

<style>
	.content {
		width: 100vw;
		height: 100vh;

		display: flex;
		justify-content: center;
	}
</style>
