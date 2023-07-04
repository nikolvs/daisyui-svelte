import type {
	ComponentBaseProps,
	ComponentColor,
	ComponentSize,
	ComponentShape
} from '$lib/internal/types';

export type ButtonProps = ComponentBaseProps<HTMLButtonElement> & {
	href?: string;
	size?: ComponentSize;
	color?: ComponentColor;
	shape?: ComponentShape;
	wide?: boolean;
	glass?: boolean;
	disabled?: boolean;
	animation?: boolean;
	fullWidth?: boolean;
	loading?: boolean;
	variant?: 'outline' | 'link';
};
