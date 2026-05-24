import { Route } from '@angular/router';
import { pendingCheckoutGuard } from './guards/pending-checkout.guard';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'cart',
    pathMatch: 'full',
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./pages/cart/cart.page').then((m) => m.CartPage),
  },
  {
    path: 'checkout',
    loadComponent: () =>
      import('./pages/checkout/checkout.page').then((m) => m.CheckoutPage),
    canDeactivate: [pendingCheckoutGuard],
  },
  {
    path: 'thanks',
    loadComponent: () =>
      import('./pages/thanks/thanks.page').then((m) => m.ThanksPage),
  },
];
