import type { ComponentBaseProps, ComponentSize } from '$lib/internal/types';

export type CardProps = ComponentBaseProps<HTMLDivElement> & {
	bordered?: boolean;
	imageFull?: boolean;
	normal?: ComponentSize | boolean;
	compact?: ComponentSize | boolean;
	side?: ComponentSize | boolean;
};

export type CardTitleProps = ComponentBaseProps & {
	tag?: keyof HTMLElementTagNameMap;
};

export type CardBodyProps = ComponentBaseProps<HTMLDivElement>;
export type CardActionsProps = ComponentBaseProps<HTMLDivElement>;
export type CardImageProps = ComponentBaseProps<HTMLImageElement>;
