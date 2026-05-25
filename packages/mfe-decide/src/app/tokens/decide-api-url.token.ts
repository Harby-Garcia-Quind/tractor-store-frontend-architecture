import { InjectionToken } from '@angular/core';

export const DECIDE_API_URL = new InjectionToken<string>('DECIDE_API_URL', {
  providedIn: 'root',
  factory: () => '/decide/api',
});
