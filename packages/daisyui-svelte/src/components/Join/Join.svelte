<script lang="ts">
	import { clsx } from 'clsx';
	import { twMerge } from 'tailwind-merge';
	import type { JoinProps } from './Join.js';

	type $$Props = JoinProps;

	export let responsive: $$Props['responsive'] = false;
	export let horizontal: $$Props['horizontal'] = false;
	export let vertical: $$Props['vertical'] = false;
	export let className: $$Props['className'] = '';
	export { className as class };

	const classes = twMerge(
		'join',
		clsx({
			'join-vertical': !responsive && vertical,
			'join-horizontal': !responsive && horizontal,
			'join-vertical lg:join-horizontal': responsive
		}),
		className
	);
</script>

<div class={classes} {...$$restProps} on:*>
	<slot />
</div>
