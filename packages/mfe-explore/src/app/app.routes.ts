import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'category/:id',
    loadComponent: () =>
      import('./pages/category/category.page').then((m) => m.CategoryPage),
  },
  {
    path: 'stores',
    loadComponent: () =>
      import('./pages/stores/stores.page').then((m) => m.StoresPage),
  },
];
