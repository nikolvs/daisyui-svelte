<script lang="ts">
	import type { NavbarProps } from './Navbar.js';
	import { twMerge } from 'tailwind-merge';

	type $$Props = NavbarProps;

	export let className: $$Props['className'] = '';
	export { className as class };

	const attrs = {
		role: 'navigation',
		'aria-label': 'Navbar',
		...$$restProps
	};
</script>

<div class={twMerge('navbar', className)} {...attrs}>
	<slot />
</div>
