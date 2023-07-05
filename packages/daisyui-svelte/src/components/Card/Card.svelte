<script lang="ts">
	import { clsx } from 'clsx';
	import { twMerge } from 'tailwind-merge';
	import type { CardProps } from './Card.js';

	type $$Props = CardProps;

	export let bordered: $$Props['bordered'] = true;
	export let imageFull: $$Props['imageFull'] = false;
	export let normal: $$Props['normal'] = false;
	export let compact: $$Props['compact'] = false;
	export let side: $$Props['side'] = false;
	export let className: $$Props['className'] = '';
	export { className as class };

	type ResponsiveModifierMap = {
		[key: string]: {
			[key: string]: string | undefined;
		};
	};

	const RESPONSIVE_MODIFIERS: ResponsiveModifierMap = {
		normal: {
			xs: 'xs:card-normal',
			sm: 'sm:card-normal',
			md: 'md:card-normal',
			lg: 'lg:card-normal',
			true: 'card-normal'
		},
		compact: {
			xs: 'xs:card-compact',
			sm: 'sm:card-compact',
			md: 'md:card-compact',
			lg: 'lg:card-compact',
			true: 'card-compact'
		},
		side: {
			xs: 'xs:card-side',
			sm: 'sm:card-side',
			md: 'md:card-side',
			lg: 'lg:card-side',
			true: 'card-side'
		}
	};

	const classes = twMerge(
		'card',
		clsx({
			'card-bordered': bordered,
			'image-full': imageFull,
			[RESPONSIVE_MODIFIERS.normal[String(normal)] ?? '']: normal,
			[RESPONSIVE_MODIFIERS.compact[String(compact)] ?? '']: compact,
			[RESPONSIVE_MODIFIERS.side[String(side)] ?? '']: side
		}),
		className
	);

	const attrs = {
		'aria-label': 'Card',
		...$$restProps
	};
</script>

<div class={classes} {...attrs}>
	<slot />
</div>
