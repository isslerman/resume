<script>
	import logo from '$lib/images/svelte-logo.svg';
</script>

<footer>
	<div class="text-sm">
		@2023 BossHouse -
		<a href="https://madewithsvelte.com/website" target="_blank" rel="noreferrer">
			Made with Svelte
			<img src={logo} alt="Svelte Logo" width="14" class="float-right mx-2" /></a
		>
	</div>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
