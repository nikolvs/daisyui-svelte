<script lang="ts">
	import { clsx } from 'clsx';
	import type { ButtonProps } from './Button.js';
	import { twMerge } from 'tailwind-merge';

	type $$Props = ButtonProps;

	export let size: $$Props['size'];
	export let color: $$Props['color'];
	export let shape: $$Props['shape'];
	export let wide: $$Props['wide'];
	export let glass: $$Props['glass'];
	export let variant: $$Props['variant'];
	export let fullWidth: $$Props['fullWidth'];
	export let animation: $$Props['animation'] = true;
	export let disabled: $$Props['disabled'] = false;
	export let className: $$Props['className'];
	export { className as class };

	const classes = twMerge(
		'btn',
		clsx({
			'btn-lg': size === 'lg',
			'btn-md': size === 'md',
			'btn-sm': size === 'sm',
			'btn-xs': size === 'xs',
			'btn-circle': shape === 'circle',
			'btn-square': shape === 'square',
			'btn-outline': variant === 'outline',
			'btn-link': variant === 'link',
			'btn-neutral': color === 'neutral',
			'btn-primary': color === 'primary',
			'btn-secondary': color === 'secondary',
			'btn-accent': color === 'accent',
			'btn-info': color === 'info',
			'btn-success': color === 'success',
			'btn-warning': color === 'warning',
			'btn-error': color === 'error',
			'btn-ghost': color === 'ghost',
			'btn-wide': wide,
			'btn-block': fullWidth,
			'no-animation': !animation,
			'btn-active': !disabled,
			'btn-disabled': disabled,
			glass: glass
		}),
		className
	);
</script>

<button class={classes} {...$$restProps}>
	<slot />
</button>
