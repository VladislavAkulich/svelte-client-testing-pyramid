<script lang="ts">
	const text = 'Theme';

	function swithMode() {
		window.document.body.classList.toggle('dark-mode');
	}
</script>

<div class="form-check form-switch">
	<input
		class="form-check-input"
		type="checkbox"
		id="flexSwitchCheckChecked"
		checked
		on:click={swithMode}
	/>
	<label class="form-check-label" for="flexSwitchCheckChecked">{text}</label>
</div>

<style>
	:global(body.dark-mode) {
		background-color: #1d3040;
		color: #bfc2c7;
	}
</style>
