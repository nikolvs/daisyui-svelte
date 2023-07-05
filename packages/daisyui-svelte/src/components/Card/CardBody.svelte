<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { CardBodyProps } from './Card.js';

	type $$Props = CardBodyProps;

	export let className: $$Props['className'];
	export { className as class };
</script>

<div class={twMerge('card-body', className)} {...$$restProps}>
	<slot />
</div>
