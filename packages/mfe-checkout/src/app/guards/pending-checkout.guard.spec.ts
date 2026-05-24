import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CheckoutPage } from '../pages/checkout/checkout.page';
import { pendingCheckoutGuard } from './pending-checkout.guard';

describe('pendingCheckoutGuard', () => {
  const route = {} as ActivatedRouteSnapshot;
  const currentState = {} as RouterStateSnapshot;
  const nextState = {} as RouterStateSnapshot;

  function makeMock(isFormDirtyAndNotSubmitted: boolean): CheckoutPage {
    return { isFormDirtyAndNotSubmitted } as unknown as CheckoutPage;
  }

  function runGuard(component: CheckoutPage) {
    return TestBed.runInInjectionContext(() =>
      pendingCheckoutGuard(component, route, currentState, nextState),
    );
  }

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should allow navigation when form is pristine', () => {
    const component = makeMock(false);

    const result = runGuard(component);

    expect(result).toBe(true);
  });

  it('should allow navigation when form has been submitted', () => {
    const component = makeMock(false);

    const result = runGuard(component);

    expect(result).toBe(true);
  });

  it('should ask confirmation when form is dirty and not submitted', () => {
    const component = makeMock(true);
    jest.spyOn(window, 'confirm').mockReturnValue(false);

    const result = runGuard(component);

    expect(window.confirm).toHaveBeenCalledWith(
      'You have unsaved changes. Are you sure you want to leave checkout?',
    );
    expect(result).toBe(false);
  });

  it('should allow navigation when user confirms the dialog', () => {
    const component = makeMock(true);
    jest.spyOn(window, 'confirm').mockReturnValue(true);

    const result = runGuard(component);

    expect(window.confirm).toHaveBeenCalledWith(
      'You have unsaved changes. Are you sure you want to leave checkout?',
    );
    expect(result).toBe(true);
  });
});