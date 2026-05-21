import type { CartId } from '../shared/ids';
import type { Money } from '../shared/money.model';
import type { LineItem } from './line-item.model';

export interface Cart {
  id: CartId;
  items: LineItem[];
  subtotal: Money;
}