import type { ComponentBaseProps, ComponentSize } from '$lib/internal/types';

export type CardProps = ComponentBaseProps<HTMLDivElement> & {
	bordered?: boolean;
	imageFull?: boolean;
	normal?: ComponentSize | boolean;
	compact?: ComponentSize | boolean;
	side?: ComponentSize | boolean;
};
