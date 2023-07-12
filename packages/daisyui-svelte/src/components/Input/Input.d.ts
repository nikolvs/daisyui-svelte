import type { ComponentBaseProps, ComponentColor, ComponentSize } from '$lib/internal/types';

export type InputProps = ComponentBaseProps<HTMLInputElement> & {
	bordered?: boolean;
	color?: ComponentColor;
	size?: ComponentSize;
};
