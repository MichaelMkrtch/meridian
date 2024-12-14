<script lang="ts">
	import * as Tooltip from './index';

	let { content, children } = $props();
</script>

<Tooltip.Provider>
	<Tooltip.Root delayDuration={300}>
		<Tooltip.Trigger>
			{@render children?.()}
		</Tooltip.Trigger>
		<Tooltip.Content side="right" sideOffset={25}>
			<p class="text-[13px] tracking-wide">{content}</p>
		</Tooltip.Content>
	</Tooltip.Root>
</Tooltip.Provider>
