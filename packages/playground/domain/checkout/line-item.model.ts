import type { LineItemId } from '../shared/ids';
import type { AddToCartCommand } from './add-to-cart-command.model';

export type LineItem = Omit<AddToCartCommand, 'id'> & {
  id: LineItemId;
  variantId: AddToCartCommand['id'];
};