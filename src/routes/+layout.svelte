<script lang="ts">
	import Sidebar from '$lib/components/ui/Sidebar.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex h-full w-full">
	<Sidebar />
	{@render children()}
</div>
