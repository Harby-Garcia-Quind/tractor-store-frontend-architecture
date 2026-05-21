import type { Cart } from './cart.model';

export type CartUpdate = Partial<Pick<Cart, 'items' | 'subtotal'>>;