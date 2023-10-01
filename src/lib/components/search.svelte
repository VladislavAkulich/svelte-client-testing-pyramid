<script lang="ts">
	import { filterUsers } from '$lib/functions/functions';
	import { items, filtered } from '../../store';
	function inputText(event: { target: object }) {
		if (event.target) {
			const value = event.target.value;
			let filteredUsers: Array<object> = filterUsers($items, value);
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
