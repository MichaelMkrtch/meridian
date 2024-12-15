<script lang="ts">
	import MetricsIcon from './icons/MetricsIcon.svelte';
	import HomeIcon from './icons/HomeIcon.svelte';
	import PreferencesIcon from './icons/PreferencesIcon.svelte';
	import WatchlistIcon from './icons/WatchlistIcon.svelte';
	import Tooltip from './ui/tooltip/Tooltip.svelte';
	import { handleKeyDown, handleKeyUp } from '$lib/shortcuts.svelte.';
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';
	import InfoIcon from './icons/InfoIcon.svelte';

	const currentLink = derived(page, ($page) => {
		const path = $page.url.pathname;

		switch (true) {
			case path === '/':
				return 1;
			case path === '/metrics':
				return 2;
			case path === '/watchlist':
				return 3;
			case path === '/preferences':
				return 4;
		}
	});

	const tabs = [
		{ id: 1, name: 'Home', href: '/', key1: 'G', key2: 'H', icon: HomeIcon },
		{ id: 2, name: 'Metrics', href: '/metrics', key1: 'G', key2: 'M', icon: MetricsIcon },
		{ id: 3, name: 'Watchlist', href: '/watchlist', key1: 'G', key2: 'W', icon: WatchlistIcon },
		{
			id: 4,
			name: 'Preferences',
			href: '/preferences',
			key1: 'G',
			key2: 'P',
			icon: PreferencesIcon
		}
	];
</script>

<svelte:window onkeydown={handleKeyDown} onkeyup={handleKeyUp} />

<section class="bg-gradient-highlight flex h-full w-[51px] pr-[1px]">
	<div
		class="bg-black-900 relative top-0 flex h-full w-full flex-col items-center justify-between pb-8 pt-6"
	>
		<span class="text-2xl">M</span>

		<div class="relative block w-full text-center font-sans text-white/60">
			<!-- Active-Link Highlighter -->
			<div
				class:translate-y-0={$currentLink === 1}
				class:translate-y-12={$currentLink === 2}
				class:translate-y-24={$currentLink === 3}
				class:translate-y-36={$currentLink === 4}
				class={`ease absolute right-0 top-0 h-10 w-[1px] origin-top bg-blue-400 transition-transform delay-75 duration-200`}
			></div>

			{#each tabs as tab (tab.id)}
				<span class="mb-2.5 block h-10">
					<Tooltip content={tab.name} key1={tab.key1} key2={tab.key2}>
						<a
							href={tab.href}
							class:text-blue-400={$currentLink === tab.id}
							class="before:hover:bg-black-500 relative z-10 flex items-center justify-center transition-all duration-200 ease-out before:absolute before:-z-10 before:mx-auto before:size-8 before:rounded before:opacity-0 before:transition-all before:duration-200 before:ease-out hover:text-blue-400 before:hover:opacity-35"
						>
							<svelte:component this={tab.icon} classes="w-5 h-10" />
						</a>
					</Tooltip>
				</span>
			{/each}
		</div>
		<span class="ease text-white/40 transition-colors duration-200 hover:text-white/60">
			<Tooltip content="Latest updates">
				<InfoIcon classes="w-[18px] h-5" />
			</Tooltip>
		</span>
	</div>
</section>
