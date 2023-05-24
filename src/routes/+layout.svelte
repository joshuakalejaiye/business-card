<script lang="ts">
	import './app.css';

	let waiting = 0;

	const notifyLoaded = () => {
		console.log('loaded!');
	};

	const onload = (el: { addEventListener: (arg0: string, arg1: () => void) => void }) => {
		waiting++;
		el.addEventListener('load', () => {
			waiting--;
			if (waiting === 0) {
				notifyLoaded();
			}
		});
	};
</script>

<div class="app">
	<main
		use:onload
		class="main w-full h-full bg-[url('https://uploadthing.com/f/fa9be026-eed7-48ea-ad0c-8e2b3c2a21b5_ebun_oluwole_max_its_webp.jpg')] bg-[center] bg-cover bg-image bg-blend-darken"
	>
		<slot />
	</main>
</div>

<style>
	:global(html) {
		background-color: #bf8c1d;
	}
</style>
