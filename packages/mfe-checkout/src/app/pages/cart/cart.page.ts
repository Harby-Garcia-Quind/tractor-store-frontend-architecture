import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import type { LineItem, Money } from 'shared-catalog';
import { TsButton } from 'ts-design-system';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'checkout-cart-page',
  imports: [TsButton],
  templateUrl: './cart.page.html',
  styleUrl: './cart.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartPage {
  private readonly router = inject(Router);
  private readonly cartService = inject(CartService);

  readonly cart = toSignal(this.cartService.getCart());

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
