<script lang="ts">
	import { clsx } from 'clsx';
	import type { LoadingProps } from './Loading.js';
	import { twMerge } from 'tailwind-merge';

	type $$Props = LoadingProps;

	export let size: $$Props['size'] = null;
	export let color: $$Props['color'] = null;
	export let variant: $$Props['variant'] = null;
	export let className: $$Props['className'] = '';
	export { className as class };

	const classes = twMerge(
		'loading',
		clsx({
			'loading-lg': size === 'lg',
			'loading-md': size === 'md',
			'loading-sm': size === 'sm',
			'loading-xs': size === 'xs',
			'loading-spinner': variant === 'spinner',
			'loading-dots': variant === 'dots',
			'loading-ring': variant === 'ring',
			'loading-ball': variant === 'ball',
			'loading-bars': variant === 'bars',
			'loading-infinity': variant === 'infinity',
			'text-primary': color === 'primary',
			'text-secondary': color === 'secondary',
			'text-accent': color === 'accent',
			'text-info': color === 'info',
			'text-success': color === 'success',
			'text-warning': color === 'warning',
			'text-error': color === 'error',
			'text-ghost': color === 'ghost'
		}),
		className
	);
</script>

<span class={classes} {...$$restProps} on:* />
