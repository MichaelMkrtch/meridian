<script lang="ts">
	import * as Tooltip from './index';

	let { content, key1, key2, children } = $props();
</script>

<Tooltip.Provider>
	<Tooltip.Root delayDuration={300}>
		<Tooltip.Trigger>
			{@render children?.()}
		</Tooltip.Trigger>
		<Tooltip.Content side="right" sideOffset={25}>
			<p class="text-[13px] tracking-wide">
				{content}
				<span class="pl-3.5"></span>
				<span class="bg-black-500/50 text-xs rounded px-1 py-[1px]">{key1}</span>
				then
				<span class="bg-black-500/50 text-xs rounded px-1 py-[1px]">{key2}</span>
			</p>
		</Tooltip.Content>
	</Tooltip.Root>
</Tooltip.Provider>
