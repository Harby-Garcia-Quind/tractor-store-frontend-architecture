import type { CartId } from '../shared/ids';
import type { AddToCartCommand } from './add-to-cart-command.model';
import type { LineItem } from './line-item.model';

export const CART_ADD_ITEM_REQUESTED = 'cart:add-item-requested' as const;
export const CART_ITEM_ADDED = 'cart:item-added' as const;

export type CartEventName =
  | typeof CART_ADD_ITEM_REQUESTED
  | typeof CART_ITEM_ADDED;

export interface CartAddItemRequestedDetail {
  source: 'decide';
  command: AddToCartCommand;
}

export interface CartItemAddedDetail {
  cartId: CartId;
  item: LineItem;
}
