<script lang="ts">
	import {Router, Route} from 'svelte-navigator';
	import Home from '../pages/Home.svelte';
	import Login from '../pages/Login.svelte';
import PrivateRoute from './PrivateRoute.svelte';
</script>

<Router>
	<Route path="login" primary={true}>
		<Login></Login>
	</Route>
	<PrivateRoute path="/" let:location>
		<Home></Home>
	</PrivateRoute>


</Router>
