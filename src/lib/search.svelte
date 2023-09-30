<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { items, filtered } from '../store';
	function inputText(event: { target: object }) {
		if (event.target) {
			const value = event.target.value;

			let filteredUsers: Array<object> = [];
			for (let item of $items) {
				if (item.name.toLowerCase().includes(value.toLowerCase())) {
					filteredUsers.push(item);
				}
			}
			filtered.set(filteredUsers);
		}
	}
</script>

<form name="search_form" class="d-flex mx-auto w-25">
	<input
		id="search"
		class="form-control me-2"
		type="search"
		placeholder="Search"
		aria-label="Search"
		on:input={inputText}
	/>
</form>
