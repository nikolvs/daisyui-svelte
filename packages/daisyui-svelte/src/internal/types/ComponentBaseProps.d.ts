import type { HTMLAttributes } from 'svelte/elements';

export interface ComponentBaseProps<T = HTMLElement> extends HTMLAttributes<T> {
	className?: string;
	'data-theme'?: string;
}
