import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { Store } from 'shared-catalog';

@Component({
  selector: 'explore-stores',
  imports: [],
  templateUrl: './stores.page.html',
  styleUrl: './stores.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoresPage {
  readonly stores: Store[] = [
    {
      id: 'store-1',
      name: 'Main Street Tractors',
      city: 'Nashville',
      country: 'USA',
    },
    {
      id: 'store-2',
      name: 'AgriPro Center',
      city: 'Columbus',
      country: 'USA',
    },
    {
      id: 'store-3',
      name: 'Midwest Equipment',
      city: 'Des Moines',
      country: 'USA',
    },
    {
      id: 'store-4',
      name: 'Southern Fields',
      city: 'Birmingham',
      country: 'USA',
    },
  ];
}

