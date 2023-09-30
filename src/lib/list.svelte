<script lang="ts">
	import { filtered } from '../store';
</script>

<ul id="user_list" class="list-group list-group-flush">
	{#each $filtered as item}
		<li class="list-group-item text-center mx-auto">
			{item.name}
		</li>
	{/each}
</ul>
