<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { CardTitleProps } from './Card.js';

	type $$Props = CardTitleProps;

	export let tag: $$Props['tag'] = 'div';
	export let className: $$Props['className'] = '';
	export { className as class };
</script>

<svelte:element this={tag} class={twMerge('card-title', className)} {...$$restProps}>
	<slot />
</svelte:element>
