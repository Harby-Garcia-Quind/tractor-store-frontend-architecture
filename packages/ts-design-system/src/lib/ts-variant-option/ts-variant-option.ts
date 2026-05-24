import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import type { Money, Variant, VariantId } from 'shared-catalog';

@Component({
  selector: 'ts-variant-option',
  imports: [],
  templateUrl: './ts-variant-option.html',
  styleUrl: './ts-variant-option.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TsVariantOption {
  variant = input.required<Variant>();
  selected = input(false);

  variantSelected = output<VariantId>();

  onSelect(): void {
    this.variantSelected.emit(this.variant().id);
  }

  formatMoney(money: Money): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: money.currency,
    }).format(money.amount);
  }

  get stockLabel(): string {
    return this.variant().stock > 0 ? 'In Stock' : 'Out of Stock';
  }

  get inStock(): boolean {
    return this.variant().stock > 0;
  }
}
