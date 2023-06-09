<script lang="ts">
	import type { NavbarProps } from './Navbar.js';
	import { twMerge } from 'tailwind-merge';

	type $$Props = NavbarProps;

	export let dataTheme: string;
	export let className: string;
	export { className as class };
</script>

<div class={twMerge('navbar', className)} data-theme={dataTheme} {...$$restProps}>
	<slot />
</div>
