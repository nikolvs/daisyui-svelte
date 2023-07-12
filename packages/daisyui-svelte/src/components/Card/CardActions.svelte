<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { CardActionsProps } from './Card.js';

	type $$Props = CardActionsProps;

	export let className: $$Props['className'] = '';
	export { className as class };
</script>

<div class={twMerge('card-actions', className)} {...$$restProps} on:*>
	<slot />
</div>
