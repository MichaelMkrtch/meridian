<script lang="ts">
	import MetricsIcon from './icons/MetricsIcon.svelte';
	import HomeIcon from './icons/HomeIcon.svelte';
	import PreferencesIcon from './icons/PreferencesIcon.svelte';
	import WatchlistIcon from './icons/WatchlistIcon.svelte';
	import Tooltip from './ui/tooltip/Tooltip.svelte';
	import { handleKeyDown, handleKeyUp } from '$lib/shortcuts.svelte.';

	let currentLink = $state(1);

	function updateCurrentLink(linkNum: number) {
		currentLink = linkNum;
	}
</script>

<svelte:window onkeydown={handleKeyDown} onkeyup={handleKeyUp} />

<section class="bg-gradient-highlight absolute left-0 top-0 h-full w-[51px] pr-[1px]">
	<div class="bg-black-900 flex h-full w-full flex-col items-center justify-center">
		<span class="absolute top-5 text-2xl">M</span>

		<div class="flex w-full flex-col items-center justify-between text-white/60">
			<!-- Active-Link Highlighter -->
			<div
				class:translate-y-0={currentLink === 1}
				class:translate-y-12={currentLink === 2}
				class:translate-y-24={currentLink === 3}
				class:translate-y-36={currentLink === 4}
				class={`ease absolute right-0 h-10 w-[1px] origin-top bg-blue-400 transition-transform delay-75 duration-200`}
			></div>

			<span class="mb-0.5">
				<Tooltip content="Home" key1="G" key2="H">
					<a
						id="home"
						href="/"
						onclick={() => updateCurrentLink(1)}
						class:text-blue-400={currentLink === 1}
						class="before:hover:bg-black-500 relative z-10 flex items-center justify-center transition-all duration-200 ease-out before:absolute before:-z-10 before:mx-auto before:size-8 before:rounded before:opacity-0 before:transition-all before:duration-200 before:ease-out hover:text-blue-400 before:hover:opacity-35"
					>
						<HomeIcon classes="w-5 h-10" />
					</a>
				</Tooltip>
			</span>

			<span class="mb-0.5">
				<Tooltip content="Metrics" key1="G" key2="M">
					<a
						id="metrics"
						href="/metrics"
						onclick={() => updateCurrentLink(2)}
						class:text-blue-400={currentLink === 2}
						class="before:hover:bg-black-500 relative z-10 flex items-center justify-center transition-all duration-200 ease-out before:absolute before:-z-10 before:mx-auto before:size-8 before:rounded before:opacity-0 before:transition-all before:duration-200 before:ease-out hover:text-blue-400 before:hover:opacity-35"
					>
						<MetricsIcon classes="w-5 h-10" />
					</a>
				</Tooltip>
			</span>

			<span class="mb-0.5">
				<Tooltip content="Watchlist" key1="G" key2="W">
					<a
						id="watchlist"
						href="/watchlist"
						onclick={() => updateCurrentLink(3)}
						class:text-blue-400={currentLink === 3}
						class="before:hover:bg-black-500 relative z-10 flex items-center justify-center transition-all duration-200 ease-out before:absolute before:-z-10 before:mx-auto before:size-8 before:rounded before:opacity-0 before:transition-all before:duration-200 before:ease-out hover:text-blue-400 before:hover:opacity-35"
					>
						<WatchlistIcon classes="w-5 h-10" />
					</a>
				</Tooltip>
			</span>

			<span class="mb-0.5">
				<Tooltip content="Preferences" key1="G" key2="P">
					<a
						id="preferences"
						href="/preferences"
						onclick={() => updateCurrentLink(4)}
						class:text-blue-400={currentLink === 4}
						class="before:hover:bg-black-500 ease before:ease relative z-10 flex items-center justify-center transition-all duration-200 before:absolute before:-z-10 before:mx-auto before:size-8 before:rounded before:opacity-0 before:transition-all before:duration-200 hover:text-blue-400 before:hover:opacity-35"
					>
						<PreferencesIcon classes="w-5 h-10" />
					</a>
				</Tooltip>
			</span>
		</div>
	</div>
</section>
