import type { ComponentBaseProps } from '$lib/internal/types';

export type NavbarProps = ComponentBaseProps<HTMLDivElement>;
export type NavbarSectionProps = NavbarProps & {
	section: 'start' | 'center' | 'end';
};
