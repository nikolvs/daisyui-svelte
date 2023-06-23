import type { CoreProps } from "$lib/internal/types";

export type NavbarProps = CoreProps<HTMLDivElement>;
export type NavbarSectionProps = NavbarProps & {
  section: 'start' | 'center' | 'end'
};