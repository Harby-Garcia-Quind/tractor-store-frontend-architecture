import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import type { ProductId, ProductSummary } from 'shared-catalog';
import { TsProductCard } from 'ts-design-system';
import { CatalogService } from '../../services/catalog.service';

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
  private readonly catalog = inject(CatalogService);

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

  readonly products = toSignal(
    this.route.paramMap.pipe(
      map((p) => p.get('id') ?? ''),
      switchMap((id) => this.catalog.getCategoryProducts(id)),
    ),
    { initialValue: [] as ProductSummary[] },
  );

  selectedProductId = signal<ProductId | null>(null);

  setFilter(id: string): void {
    this.activeFilter.set(id);
  }

  onProductSelected(id: ProductId): void {
    this.selectedProductId.set(id);
  }
}

