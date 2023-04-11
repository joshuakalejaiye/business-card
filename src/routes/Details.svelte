<script lang="ts">
	import TypedRole from './TypedRole.svelte';
</script>

<div id="details" class="font-spacemono w-200 text-white p-6">
    <div id="name" class="font-milligram text-6xl">Adedayo Kalejaiye (Joshua)</div>
    <span id="role-container" class="flex gap-3 mt-1 mb-1">
        <p id="i-am" class="text-4xl">I'm a </p>
        <TypedRole />
    </span>
    <span id="links" class="flex gap-5">
        <a href="http://github.com/joshuakalejaiye" target="_blank" id="gh">GitHub</a>
        <a href="http://linkedin.com/in/joshuakalejaiye" id="linkedin">LinkedIn</a>
        <div id="blog" class="text-gray-500">Blog (soon...)</div>
    </span>
</div>

