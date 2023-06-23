import type { HTMLAttributes } from "svelte/elements";

export interface CoreProps<T = HTMLElement> extends HTMLAttributes<T> {
  className?: string;
  'data-theme'?: string;
}