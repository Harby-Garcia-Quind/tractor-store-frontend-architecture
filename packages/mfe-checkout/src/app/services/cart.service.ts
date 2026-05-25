import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import type { Cart } from 'shared-catalog';
import { CHECKOUT_API_URL } from '../tokens/checkout-api-url.token';

const MOCK_CART: Cart = {
  id: 'cart-001',
  items: [
    {
      id: 'item-1',
      variantId: 'var-red',
      productId: 'tractor-001',
      name: 'Big Tractor 5000 – Red Diesel',
      sku: 'BT5000-RED',
      price: { amount: 25000, currency: 'USD' },
      quantity: 1,
    },
    {
      id: 'item-2',
      variantId: 'var-blue',
      productId: 'tractor-001',
      name: 'Big Tractor 5000 – Blue Diesel',
      sku: 'BT5000-BLU',
      price: { amount: 26500, currency: 'USD' },
      quantity: 2,
    },
  ],
  subtotal: { amount: 78000, currency: 'USD' },
};

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly apiUrl = inject(CHECKOUT_API_URL);

  getCart(): Observable<Cart> {
    console.log('Fetching cart from API:', this.apiUrl);
    return of(MOCK_CART);
  }

  submitCheckout(_formValue: unknown): Observable<{ orderId: string }> {
    console.log('Submitting checkout with form value:', _formValue);
    return of({ orderId: 'order-001' });
  }
}
