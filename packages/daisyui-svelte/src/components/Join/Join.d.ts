import type { ComponentBaseProps } from '$lib/internal/types';

export type JoinProps = ComponentBaseProps<HTMLDivElement> & {
	responsive?: boolean;
	horizontal?: boolean;
	vertical?: boolean;
};
