import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import type { ProductId, ProductSummary } from 'shared-catalog';
import { TsProductCard } from 'ts-design-system';

interface FilterChip {
  id: string;
  label: string;
}

@Component({
  selector: 'explore-category',
  imports: [TsProductCard],
  templateUrl: './category.page.html',
  styleUrl: './category.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryPage {
  private readonly route = inject(ActivatedRoute);

  readonly categoryId = toSignal(
    this.route.paramMap.pipe(map((p) => p.get('id') ?? '')),
    { initialValue: '' },
  );

  readonly filters: FilterChip[] = [
    { id: 'all', label: 'All' },
    { id: 'in-stock', label: 'In Stock' },
    { id: 'best-sellers', label: 'Best Sellers' },
    { id: 'new', label: 'New Arrivals' },
  ];

  activeFilter = signal<string>('all');

  readonly products: ProductSummary[] = [
    {
      id: 'prod-4',
      name: 'FieldMaster 80',
      brand: 'AgriForce',
      category: 'Utility Tractors',
      basePrice: { amount: 34999, currency: 'USD' },
      primaryImageUrl:
        'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=600&q=80',
    },
    {
      id: 'prod-5',
      name: 'WorkHorse 65',
      brand: 'TractorCo',
      category: 'Utility Tractors',
      basePrice: { amount: 28750, currency: 'USD' },
      primaryImageUrl:
        'https://images.unsplash.com/photo-1567416661576-659f9e5c4d43?w=600&q=80',
    },
    {
      id: 'prod-6',
      name: 'LandForce 90',
      brand: 'GreenField',
      category: 'Utility Tractors',
      basePrice: { amount: 41200, currency: 'USD' },
      primaryImageUrl:
        'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&q=80',
    },
  ];

  selectedProductId = signal<ProductId | null>(null);

  setFilter(id: string): void {
    this.activeFilter.set(id);
  }

  onProductSelected(id: ProductId): void {
    this.selectedProductId.set(id);
  }
}

