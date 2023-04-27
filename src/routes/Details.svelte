<script lang="ts">
	import TypedRole from './TypedRole.svelte';
</script>

<div id="details" class="font-spacemono w-200 text-white p-6">
    <div id="name" class="font-milligram text-5xl lg:text-6xl">Adedayo Kalejaiye (Joshua)</div>
    <span id="role-container" class="flex justify-center lg:justify-normal gap-3 mt-1 mb-1">
        <TypedRole />
    </span>
    <span id="links" class="flex justify-center lg:justify-normal gap-5">
        <a href="http://github.com/joshuakalejaiye" target="_blank" id="gh" >GitHub</a>
        <a href="http://linkedin.com/in/joshuakalejaiye" id="linkedin">LinkedIn</a>
        <div id="blog" class="text-gray-500">Blog (soon...)</div>
    </span>
</div>

<style>
    * { 
		/* border: 2px solid red; */
		text-align: center;	
    }
</style>
