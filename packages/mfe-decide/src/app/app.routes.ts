import { Route } from '@angular/router';
import { productResolver } from './resolvers/product.resolver';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'product/tractor-001',
    pathMatch: 'full',
  },
  {
    path: 'product/:id',
    resolve: { product: productResolver },
    loadComponent: () =>
      import('./pages/product/product.page').then((m) => m.ProductPage),
  },
];
