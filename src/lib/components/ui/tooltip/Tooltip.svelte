<script lang="ts">
	import * as Tooltip from './index';

	let { content, children } = $props();
</script>

<Tooltip.Provider>
	<Tooltip.Root delayDuration={250}>
		<Tooltip.Trigger>
			{@render children?.()}
		</Tooltip.Trigger>
		<Tooltip.Content side="right" sideOffset={25}>
			<p>{content}</p>
		</Tooltip.Content>
	</Tooltip.Root>
</Tooltip.Provider>
