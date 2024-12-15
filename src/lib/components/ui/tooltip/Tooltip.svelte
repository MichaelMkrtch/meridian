<script lang="ts">
	import type { Snippet } from 'svelte';
	import * as Tooltip from './index';

	type TooltipProps = {
		content: string;
		side: 'top' | 'right' | 'bottom' | 'left';
		sideOffset?: number;
		key1?: string;
		key2?: string;
		children: Snippet;
	};

	let { content, side, key1, key2, children, sideOffset = 25 }: TooltipProps = $props();
</script>

<Tooltip.Provider>
	<Tooltip.Root delayDuration={300}>
		<Tooltip.Trigger>
			{@render children()}
		</Tooltip.Trigger>
		<Tooltip.Content {side} {sideOffset}>
			<p class="text-[13px] tracking-wide">
				{content}
				{#if key1}
					<span class:pl-3.5={key1 && key2} class:pl-1={key1 && !key2}></span>
					<span class="rounded bg-black-500/40 px-1 py-[1px] text-xs">{key1}</span>
				{/if}
				{#if key2}
					then
					<span class="rounded bg-black-500/40 px-1 py-[1px] text-xs">{key2}</span>
				{/if}
			</p>
		</Tooltip.Content>
	</Tooltip.Root>
</Tooltip.Provider>
