<script lang="ts">
	import SearchIcon from '$lib/components/icons/SearchIcon.svelte';
	import Tooltip from './tooltip/Tooltip.svelte';
	import { page } from '$app/stores';

	let { title } = $props();

	const isPreferences = $state($page.url.pathname === '/preferences');

	const options: Intl.DateTimeFormatOptions = {
		weekday: 'long',
		month: 'long',
		day: 'numeric'
	};

	const fullDate = new Intl.DateTimeFormat('en-US', options).format();
</script>

<header class="flex h-36 items-center justify-between border-b border-zinc-800">
	<div class="flex flex-col">
		<h1 class="-mb-0.5 text-2xl font-semibold text-zinc-50">{title}</h1>
		<p class="text-lg text-zinc-500">{isPreferences ? 'email' : fullDate}</p>
	</div>
	<Tooltip content="Search" side="bottom" sideOffset={10} key1="/">
		<span
			class="textured-dark shadow-small ease active:shadow-inset relative block cursor-pointer rounded-full border border-transparent p-2 text-zinc-400 transition-colors duration-200 before:absolute before:left-0 before:top-0 before:h-full before:w-full before:rounded-full before:bg-white before:opacity-0 before:transition-opacity before:duration-200 hover:text-zinc-200 before:hover:opacity-[0.03] active:translate-y-[1px] active:before:opacity-[0.01] active:before:duration-0"
		>
			<SearchIcon classes="w-[18px] h-[18px]" />
		</span>
	</Tooltip>
</header>
