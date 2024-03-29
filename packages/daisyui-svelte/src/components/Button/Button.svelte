<script lang="ts">
	import { clsx } from 'clsx';
	import type { ButtonProps } from './Button.js';
	import { twMerge } from 'tailwind-merge';
	import { Loading } from '$lib/components';

	type $$Props = ButtonProps;

	export let href: $$Props['href'] = '';
	export let size: $$Props['size'] = null;
	export let color: $$Props['color'] = null;
	export let shape: $$Props['shape'] = null;
	export let variant: $$Props['variant'] = null;
	export let wide: $$Props['wide'] = false;
	export let glass: $$Props['glass'] = false;
	export let loading: $$Props['loading'] = false;
	export let disabled: $$Props['disabled'] = false;
	export let fullWidth: $$Props['fullWidth'] = false;
	export let animation: $$Props['animation'] = true;
	export let className: $$Props['className'] = '';
	export { className as class };

	const classes = twMerge(
		'btn',
		clsx({
			'gap-2': ($$slots.startIcon && !loading) || $$slots.endIcon,
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
			glass
		}),
		className
	);
</script>

{#if href}
	<a {href} class={classes} {...$$restProps} on:*>
		<slot name="startIcon" />
		<slot />
		<slot name="endIcon" />
	</a>
{:else}
	<button class={classes} {...$$restProps} on:*>
		{#if loading}
			<Loading {size} />
		{:else}
			<slot name="startIcon" />
		{/if}

		<slot />
		<slot name="endIcon" />
	</button>
{/if}
