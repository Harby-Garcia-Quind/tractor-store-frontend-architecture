import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import type { ProductId, ProductSummary } from 'shared-catalog';
import { TsProductCard } from 'ts-design-system';

@Component({
  imports: [RouterModule, TsProductCard],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  readonly products: ProductSummary[] = [
    {
      id: 'prod-1',
      name: 'PowerTrac 50',
      brand: 'TractorCo',
      category: 'Compact Tractors',
      basePrice: { amount: 18500, currency: 'USD' },
      primaryImageUrl:
        'https://images.unsplash.com/photo-1567416661576-659f9e5c4d43?w=600&q=80',
    },
    {
      id: 'prod-2',
      name: 'FieldMaster 80',
      brand: 'AgriForce',
      category: 'Utility Tractors',
      basePrice: { amount: 34999, currency: 'USD' },
      primaryImageUrl:
        'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=600&q=80',
    },
    {
      id: 'prod-3',
      name: 'HarvestKing 120',
      brand: 'GreenField',
      category: 'Row Crop Tractors',
      basePrice: { amount: 62000, currency: 'USD' },
      primaryImageUrl:
        'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&q=80',
    },
  ];

  selectedProductId = signal<ProductId | null>(null);

  onProductSelected(id: ProductId): void {
    this.selectedProductId.set(id);
  }
}
