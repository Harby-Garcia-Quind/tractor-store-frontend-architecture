import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/shell-home.page').then((m) => m.ShellHomePage),
  },
  {
    path: 'explore',
    loadComponent: () =>
      import('./pages/remote/shell-remote.page').then((m) => m.ShellRemotePage),
    data: { remoteUrl: 'http://localhost:4201' },
  },
  {
    path: 'category/:id',
    loadComponent: () =>
      import('./pages/remote/shell-remote.page').then((m) => m.ShellRemotePage),
    data: { remoteBaseUrl: 'http://localhost:4201/category' },
  },
  {
    path: 'stores',
    loadComponent: () =>
      import('./pages/remote/shell-remote.page').then((m) => m.ShellRemotePage),
    data: { remoteUrl: 'http://localhost:4201/stores' },
  },
  {
    path: 'product/:id',
    loadComponent: () =>
      import('./pages/remote/shell-remote.page').then((m) => m.ShellRemotePage),
    data: { remoteBaseUrl: 'http://localhost:4202/product' },
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./pages/remote/shell-remote.page').then((m) => m.ShellRemotePage),
    data: { remoteUrl: 'http://localhost:4203/cart' },
  },
  {
    path: 'checkout',
    loadComponent: () =>
      import('./pages/remote/shell-remote.page').then((m) => m.ShellRemotePage),
    data: { remoteUrl: 'http://localhost:4203/checkout' },
  },
  {
    path: 'thanks',
    loadComponent: () =>
      import('./pages/remote/shell-remote.page').then((m) => m.ShellRemotePage),
    data: { remoteUrl: 'http://localhost:4203/thanks' },
  },
];
