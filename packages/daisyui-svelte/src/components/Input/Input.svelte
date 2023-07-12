<script lang="ts">
	import { clsx } from 'clsx';
	import { twMerge } from 'tailwind-merge';
	import type { InputProps } from './Input.js';

	type $$Props = InputProps;

	export let size: $$Props['size'] = null;
	export let color: $$Props['color'] = null;
	export let bordered: $$Props['bordered'] = true;
	export let value: $$Props['value'] = '';
	export let className: $$Props['className'] = '';
	export { className as class };

	const classes = twMerge(
		'input',
		clsx({
			'input-lg': size === 'lg',
			'input-md': size === 'md',
			'input-sm': size === 'sm',
			'input-xs': size === 'xs',
			'input-primary': color === 'primary',
			'input-secondary': color === 'secondary',
			'input-accent': color === 'accent',
			'input-ghost': color === 'ghost',
			'input-info': color === 'info',
			'input-success': color === 'success',
			'input-warning': color === 'warning',
			'input-error': color === 'error',
			'input-bordered': bordered
		}),
		className
	);
</script>

<input class={classes} {...$$restProps} bind:value on:* />
