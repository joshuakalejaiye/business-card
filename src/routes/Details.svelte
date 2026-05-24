<script lang="ts">
	import TypedRole from './TypedRole.svelte';
</script>

<div
	id="details"
	class="font-spacemono w-200 text-[#6B4700] p-6 sm:p-[100px] drop-shadow-2px-2px-2px-212121 bg-[#FECE66]"
>
	<div id="name" class="font-milligram text-5xl lg:text-6xl">Adedayo Kalejaiye (Joshua)</div>
	<div
		id="role-container"
		class="flex flex-col md:flex-row text-center justify-center mt-4 md:mt-1 md:justify-normal md:gap-3 mb-1"
	>
		<TypedRole />
	</div>
	<nav
		id="links"
		aria-label="Social links"
		class="flex flex-wrap justify-center md:justify-normal mt-4 sm:mt-[0] gap-2 sm:gap-5"
	>
		<a href="http://github.com/joshuakalejaiye" class="hover:text-[#3D2800]" target="_blank" rel="noopener noreferrer" id="gh"
			>GitHub</a
		>
		<a href="http://linkedin.com/in/joshuakalejaiye" class="hover:text-[#3D2800]" rel="noopener noreferrer" id="linkedin"
			>LinkedIn</a
		>
		<a href="https://fighter-stats.vercel.app" class="hover:text-[#3D2800]" rel="noopener noreferrer" id="fighter-stats"
			>Fighter Stats</a
		>
	</nav>
</div>

<style>
	* {
		/* border: 2px solid red; */
		text-align: center;
	}
</style>
