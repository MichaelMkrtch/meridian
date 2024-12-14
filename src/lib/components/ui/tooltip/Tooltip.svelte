<script lang="ts">
	import type { Snippet } from 'svelte';
	import * as Tooltip from './index';

	type TooltipProps = {
		content: string;
		key1?: string;
		key2?: string;
		children: Snippet;
	};

	let { content, key1, key2, children }: TooltipProps = $props();
</script>

<Tooltip.Provider>
	<Tooltip.Root delayDuration={300}>
		<Tooltip.Trigger>
			{@render children()}
		</Tooltip.Trigger>
		<Tooltip.Content side="right" sideOffset={25}>
			<p class="text-[13px] tracking-wide">
				{content}
				{#if key1 && key2}
					<span class="pl-3.5"></span>
					<span class="bg-black-500/40 rounded px-1 py-[1px] text-xs">{key1}</span>
					then
					<span class="bg-black-500/40 rounded px-1 py-[1px] text-xs">{key2}</span>
				{/if}
			</p>
		</Tooltip.Content>
	</Tooltip.Root>
</Tooltip.Provider>
