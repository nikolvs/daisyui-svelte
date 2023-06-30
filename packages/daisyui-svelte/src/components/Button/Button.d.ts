import type {
  ComponentBaseProps,
  ComponentColor,
  ComponentSize,
  ComponentShape
} from "$lib/internal/types";

export type ButtonProps = ComponentBaseProps<HTMLDivElement> & {
  size?: ComponentSize
  color?: ComponentColor
  shape?: ComponentShape
  wide?: boolean
  glass?: boolean
  disabled?: boolean
  animation?: boolean
  fullWidth?: boolean
  variant?: 'outline' | 'link'
};
