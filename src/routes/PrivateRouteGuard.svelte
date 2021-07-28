<script>
	import {useNavigate, useLocation} from 'svelte-navigator';
	import {user} from '../store/stores';

	const navigate = useNavigate();
	const location = useLocation();

	$: if(localStorage.getItem('github_user')){
		$user = JSON.parse(localStorage.getItem('github_user'));
		navigate('/', { replace: true });
	}

	$: if (!$user) {
    navigate('/login', {
      state: { from: $location.pathname },
      replace: true,
		});
  }
</script>

{#if $user}
	<slot />
{/if}
