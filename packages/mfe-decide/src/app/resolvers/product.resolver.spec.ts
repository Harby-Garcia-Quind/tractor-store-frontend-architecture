import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot, convertToParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import type { Product } from 'shared-catalog';
import { productResolver } from './product.resolver';

describe('productResolver', () => {
  it('should resolve product data for the given id', (done) => {
    TestBed.configureTestingModule({});

    const route = {
      paramMap: convertToParamMap({ id: 'tractor-001' }),
    } as unknown as ActivatedRouteSnapshot;

    const state = {} as RouterStateSnapshot;

    TestBed.runInInjectionContext(() => {
      const result = productResolver(route, state) as Observable<Product>;
      result.subscribe((product) => {
        expect(product.id).toBe('tractor-001');
        expect(product.name).toBe('Big Tractor 5000');
        done();
      });
    });
  });

  it('should fall back to tractor-001 when no id is present', (done) => {
    TestBed.configureTestingModule({});

    const route = {
      paramMap: convertToParamMap({}),
    } as unknown as ActivatedRouteSnapshot;

    const state = {} as RouterStateSnapshot;

    TestBed.runInInjectionContext(() => {
      const result = productResolver(route, state) as Observable<Product>;
      result.subscribe((product) => {
        expect(product).toBeTruthy();
        done();
      });
    });
  });
});
