import { CanDeactivateFn } from '@angular/router';
import { CheckoutPage } from '../pages/checkout/checkout.page';

export const pendingCheckoutGuard: CanDeactivateFn<CheckoutPage> = (
  component,
) => {
  if (component.isFormDirtyAndNotSubmitted) {
    return window.confirm(
      'You have unsaved changes. Are you sure you want to leave checkout?',
    );
  }
  return true;
};
