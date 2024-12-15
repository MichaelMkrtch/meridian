<script lang="ts">
	import SearchIcon from '../icons/SearchIcon.svelte';
	import Tooltip from './tooltip/Tooltip.svelte';

	let { title } = $props();

	const options: Intl.DateTimeFormatOptions = {
		weekday: 'long',
		month: 'long',
		day: 'numeric'
	};

	const fullDate = new Intl.DateTimeFormat('en-US', options).format();
</script>

<header class="flex h-36 items-center justify-between p-20">
	<div class="flex flex-col">
		<h1 class="-mb-0.5 text-2xl font-semibold">{title}</h1>
		<p class="text-lg text-[#868F97]/90">{fullDate}</p>
	</div>
	<Tooltip content="Search" side="bottom" sideOffset={10} key1="/">
		<span
			class="ease block size-9 cursor-pointer rounded-full border border-black-500/20 bg-black-500/50 p-2 text-white/60 transition-colors duration-200 hover:border-black-500/30 hover:bg-black-500/70 hover:text-white/90"
		>
			<SearchIcon classes="w-[18px] h-[18px]" />
		</span>
	</Tooltip>
</header>
