<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { CardImageProps } from './Card.js';

	type $$Props = CardImageProps;

	export let alt: $$Props['alt'];
	export let className: $$Props['className'] = '';
	export { className as class };
</script>

<figure>
	<img class={twMerge(className)} {alt} {...$$restProps} on:* />
</figure>
