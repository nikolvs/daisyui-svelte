import type { ComponentBaseProps, ComponentStatus } from '$lib/internal/types';

export type AlertProps = ComponentBaseProps<HTMLDivElement> & {
	status?: ComponentStatus;
};
