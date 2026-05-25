import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import type { Store } from 'shared-catalog';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'explore-stores',
  imports: [],
  templateUrl: './stores.page.html',
  styleUrl: './stores.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoresPage {
  private readonly catalog = inject(CatalogService);

  readonly stores = toSignal(this.catalog.getStores(), {
    initialValue: [] as Store[],
  });
}

