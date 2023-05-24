<script lang="ts">
	import TypedRole from './TypedRole.svelte';
</script>

<div
	id="details"
	class="font-spacemono w-200 text-[#744F00] p-6 sm:p-[100px] drop-shadow-2px-2px-2px-212121 bg-[#FECE66]"
>
	<div id="name" class="font-milligram text-5xl lg:text-6xl">Adedayo Kalejaiye (Joshua)</div>
	<span id="role-container" class="flex justify-center lg:justify-normal gap-3 mt-1 mb-1">
		<TypedRole />
	</span>
	<span id="links" class="flex justify-center lg:justify-normal gap-5">
		<a href="http://github.com/joshuakalejaiye" class="hover:text-white" target="_blank" id="gh"
			>GitHub</a
		>
		<a href="http://linkedin.com/in/joshuakalejaiye" class="hover:text-white" id="linkedin"
			>LinkedIn</a
		>
		<div id="blog" class="text-[#BF8C1D]">Blog (soon...)</div>
	</span>
</div>

<style>
	* {
		/* border: 2px solid red; */
		text-align: center;
	}
</style>
