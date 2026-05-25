import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import type { Product, Variant, VariantId } from 'shared-catalog';
import { TsButton, TsVariantOption } from 'ts-design-system';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'decide-product-page',
  imports: [TsVariantOption, TsButton],
  templateUrl: './product.page.html',
  styleUrl: './product.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPage {
  private readonly route = inject(ActivatedRoute);
  private readonly productService = inject(ProductService);

  readonly product = toSignal(
    this.route.data.pipe(map((d) => d['product'] as Product)),
  );

  readonly variants = toSignal(
    this.route.paramMap.pipe(
      map((p) => p.get('id') ?? 'tractor-001'),
      switchMap((id) => this.productService.getVariantsByProductId(id)),
    ),
    { initialValue: [] as Variant[] },
  );

  selectedVariantId = signal<VariantId | null>(null);

  get heroAlt(): string {
    return this.product()?.images[0]?.alt ?? '';
  }

  onVariantSelected(id: VariantId): void {
    this.selectedVariantId.set(id);
  }
}
