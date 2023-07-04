import type { ComponentBaseProps, ComponentColor, ComponentSize } from '$lib/internal/types';

export type LoadingProps = ComponentBaseProps<HTMLSpanElement> & {
	size?: ComponentSize;
	color?: ComponentColor;
	variant?: 'spinner' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity';
};
