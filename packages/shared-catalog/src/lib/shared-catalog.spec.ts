import type { Money, Currency } from './shared/money.model';
import type { Result } from './shared/result.type';
import type { DomainError } from './shared/domain-error.model';
import type { Product } from './explore/product.model';
import type { Variant } from './decide/variant.model';
import type { Cart } from './checkout/cart.model';
import {
  CART_ADD_ITEM_REQUESTED,
  CART_ITEM_ADDED,
} from './checkout/cart-events.model';

describe('shared-catalog contracts', () => {
  it('CART_ADD_ITEM_REQUESTED has correct value', () => {
    expect(CART_ADD_ITEM_REQUESTED).toBe('cart:add-item-requested');
  });

  it('CART_ITEM_ADDED has correct value', () => {
    expect(CART_ITEM_ADDED).toBe('cart:item-added');
  });

  it('Money shape is structurally valid', () => {
    const money: Money = { amount: 25000, currency: 'USD' as Currency };
    expect(money.amount).toBe(25000);
    expect(money.currency).toBe('USD');
  });

  it('Result Success shape is structurally valid', () => {
    const result: Result<number, DomainError> = { ok: true, data: 42 };
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.data).toBe(42);
    }
  });

  it('Result Failure shape is structurally valid', () => {
    const error: DomainError = { code: 'NOT_FOUND', message: 'Not found' };
    const result: Result<Product, DomainError> = { ok: false, error };
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error.code).toBe('NOT_FOUND');
    }
  });

  it('Variant stock is a number', () => {
    const variant: Variant = {
      id: 'v-001',
      productId: 'p-001',
      name: 'Big Tractor 5000 - Red',
      sku: 'SKU-001',
      color: 'red',
      engine: 'diesel',
      price: { amount: 25000, currency: 'USD' },
      stock: 10,
    };
    expect(typeof variant.stock).toBe('number');
  });

  it('Cart subtotal is a Money object', () => {
    const cart: Cart = {
      id: 'cart-001',
      items: [],
      subtotal: { amount: 0, currency: 'USD' },
    };
    expect(cart.subtotal.currency).toBe('USD');
  });
});
