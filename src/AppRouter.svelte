<script lang="ts">
	import {Router, Route} from 'svelte-navigator';
	import Home from './pages/Home.svelte';
	import Login from './pages/Login.svelte';
</script>

<Router>
	<Route path="/" primary={true}>
		<Home></Home>
	</Route>
	<Route path="login" primary={false}>
		<Login></Login>
	</Route>

</Router>
