import { InjectionToken } from '@angular/core';

export const CHECKOUT_API_URL = new InjectionToken<string>('CHECKOUT_API_URL', {
  providedIn: 'root',
  factory: () => '/checkout/api',
});
