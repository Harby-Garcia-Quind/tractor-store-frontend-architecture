import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'product/tractor-001',
    pathMatch: 'full',
  },
  {
    path: 'product/:id',
    loadComponent: () =>
      import('./pages/product/product.page').then((m) => m.ProductPage),
  },
];
