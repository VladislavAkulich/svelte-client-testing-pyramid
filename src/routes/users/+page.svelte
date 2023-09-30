<script lang="ts">
	import { items, filtered } from '../../store';
	import type { PageData } from '../$types';
	import SearchForm from '$lib/searchForm.svelte';

	export let data: PageData;
	items.set(data.users);
	filtered.set(data.users);
</script>

<SearchForm />
