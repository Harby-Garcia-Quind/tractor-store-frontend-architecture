import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import type { ProductId, ProductSummary } from 'shared-catalog';
import { TsProductCard } from 'ts-design-system';
import { CatalogService } from '../../services/catalog.service';

interface CategoryTeaser {
  id: string;
  label: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'explore-home',
  imports: [TsProductCard, RouterLink],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  private readonly catalog = inject(CatalogService);

  readonly categories: CategoryTeaser[] = [
    {
      id: 'utility',
      label: 'Utility Tractors',
      description: 'Versatile workhorses for every task.',
      imageUrl:
        'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=600&q=80',
    },
    {
      id: 'compact',
      label: 'Compact Tractors',
      description: 'Agile and easy to handle on any terrain.',
      imageUrl:
        'https://images.unsplash.com/photo-1567416661576-659f9e5c4d43?w=600&q=80',
    },
    {
      id: 'heavy-duty',
      label: 'Heavy Duty Tractors',
      description: 'Maximum power for demanding operations.',
      imageUrl:
        'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&q=80',
    },
  ];

  readonly products = toSignal(this.catalog.getHomeProducts(), {
    initialValue: [] as ProductSummary[],
  });

  selectedProductId = signal<ProductId | null>(null);

  onProductSelected(id: ProductId): void {
    this.selectedProductId.set(id);
  }
}
