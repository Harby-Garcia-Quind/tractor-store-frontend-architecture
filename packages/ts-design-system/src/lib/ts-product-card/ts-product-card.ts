import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import type { Money, ProductId, ProductSummary } from 'shared-catalog';
import { TsButton } from '../ts-button/ts-button';

@Component({
  selector: 'ts-product-card',
  imports: [TsButton],
  templateUrl: './ts-product-card.html',
  styleUrl: './ts-product-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TsProductCard {
  product = input.required<ProductSummary>();
  selected = output<ProductId>();

  onSelect(): void {
    this.selected.emit(this.product().id);
  }

  formatMoney(money: Money): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: money.currency,
    }).format(money.amount);
  }
}
