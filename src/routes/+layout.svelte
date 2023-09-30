<script lang="ts">
	import Toggle from '../lib/toggle.svelte';
</script>

<header>
	<nav class="nav nav-pills flex-column flex-sm-row w-50 mx-auto">
		<a class="flex-sm-fill text-sm-center nav-link" href="/">Home</a>
		<a class="flex-sm-fill text-sm-center nav-link" href="/users">Users</a>
		<a class="flex-sm-fill text-sm-center nav-link" href="/about">About</a>
	</nav>
	<Toggle />
</header>
<main>
	<slot />
</main>
<footer />
