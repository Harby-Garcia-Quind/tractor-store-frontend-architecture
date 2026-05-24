import type { SelectedVariant } from '../decide/selected-variant.model';

export type AddToCartCommand = SelectedVariant & {
  quantity: number;
};
