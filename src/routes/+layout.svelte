<script>
	import './app.css';
</script>

<div class="app">
	<main
		class="w-full h-full bg-[url('../lib/images/ebun_oluwole_max.webp')] bg-[center] bg-cover bg-image bg-blend-darken"
	>
		<slot />
	</main>
</div>

<style>
	:global(html) {
		background-color: #bf8c1d;
	}
</style>
