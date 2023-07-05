<script lang="ts">
	import type { NavbarSectionProps } from './Navbar.js';
	import { twMerge } from 'tailwind-merge';
	import { clsx } from 'clsx';

	type $$Props = NavbarSectionProps;

	export let section: $$Props['section'] = null;
	export let className: $$Props['className'] = '';
	export { className as class };

	const classes = twMerge(
		clsx({
			'navbar-start': section === 'start',
			'navbar-center': section === 'center',
			'navbar-end': section === 'end'
		}),
		className
	);
</script>

<div class={classes} {...$$restProps}>
	<slot />
</div>
