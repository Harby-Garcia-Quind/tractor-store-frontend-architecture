import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import type { Cart, LineItem, Money } from 'shared-catalog';
import { TsButton } from 'ts-design-system';

@Component({
  selector: 'checkout-cart-page',
  imports: [TsButton],
  templateUrl: './cart.page.html',
  styleUrl: './cart.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartPage {
  private readonly router = inject(Router);

  readonly cart: Cart = {
    id: 'cart-001',
    items: [
      {
        id: 'item-1',
        variantId: 'var-red',
        productId: 'tractor-001',
        name: 'Big Tractor 5000 — Red Diesel',
        sku: 'BT5000-RED-DSL',
        price: { amount: 25000, currency: 'USD' },
        quantity: 1,
      },
      {
        id: 'item-2',
        variantId: 'var-blue',
        productId: 'tractor-001',
        name: 'Big Tractor 5000 — Blue Diesel',
        sku: 'BT5000-BLU-DSL',
        price: { amount: 26500, currency: 'USD' },
        quantity: 2,
      },
    ],
    subtotal: { amount: 78000, currency: 'USD' },
  };

  lineSubtotal(item: LineItem): string {
    return this.formatMoney({
      amount: item.price.amount * item.quantity,
      currency: item.price.currency,
    });
  }

  formatMoney(money: Money): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: money.currency,
    }).format(money.amount);
  }

  goToCheckout(): void {
    this.router.navigate(['/checkout']);
  }
}
