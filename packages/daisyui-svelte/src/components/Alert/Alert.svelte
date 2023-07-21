<script lang="ts">
	import { clsx } from 'clsx';
	import { twMerge } from 'tailwind-merge';
	import type { AlertProps } from './Alert.js';

	type $$Props = AlertProps;

	export let status: $$Props['status'] = null;
	export let className: $$Props['className'] = '';
	export { className as class };

	const classes = twMerge(
		'alert',
		clsx({
			'alert-info': status === 'info',
			'alert-success': status === 'success',
			'alert-warning': status === 'warning',
			'alert-error': status === 'error'
		}),
		className
	);

	const attrs = {
		role: 'alert',
		...$$restProps
	};
</script>

<div class={classes} {...attrs} on:*>
	<slot name="icon" />
	<slot />
</div>
