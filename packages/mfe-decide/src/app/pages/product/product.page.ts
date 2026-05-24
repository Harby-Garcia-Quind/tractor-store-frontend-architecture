import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import type { Product, Variant, VariantId } from 'shared-catalog';
import { TsButton, TsVariantOption } from 'ts-design-system';

@Component({
  selector: 'decide-product-page',
  imports: [TsVariantOption, TsButton],
  templateUrl: './product.page.html',
  styleUrl: './product.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPage {
  readonly product: Product = {
    id: 'tractor-001',
    name: 'Big Tractor 5000',
    brand: 'Tractor Corp',
    category: 'Utility',
    description: 'A reliable tractor for demanding field work.',
    basePrice: { amount: 25000, currency: 'USD' },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&q=80',
        alt: 'Big Tractor 5000',
      },
    ],
    availableStores: ['store-1', 'store-2'],
  };

  readonly variants: Variant[] = [
    {
      id: 'var-red',
      productId: 'tractor-001',
      name: 'Big Tractor 5000 — Red Diesel',
      sku: 'FM80-RED-DSL',
      color: 'Red',
      engine: '80HP Diesel',
      price: { amount: 34999, currency: 'USD' },
      stock: 3,
    },
    {
      id: 'var-blue',
      productId: 'tractor-001',
      name: 'Big Tractor 5000 — Blue Diesel',
      sku: 'FM80-BLU-DSL',
      color: 'Blue',
      engine: '80HP Diesel',
      price: { amount: 35499, currency: 'USD' },
      stock: 1,
    },
    {
      id: 'var-black',
      productId: 'tractor-001',
      name: 'Big Tractor 5000 — Black Hybrid',
      sku: 'FM80-BLK-HYB',
      color: 'Black',
      engine: '80HP Hybrid',
      price: { amount: 38999, currency: 'USD' },
      stock: 0,
    },
  ];

  selectedVariantId = signal<VariantId | null>(null);

  get heroAlt(): string {
    return this.product.images[0].alt;
  }

  onVariantSelected(id: VariantId): void {
    this.selectedVariantId.set(id);
  }
}
