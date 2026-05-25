import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a product by id', (done) => {
    service.getProductById('tractor-001').subscribe((product) => {
      expect(product).toBeTruthy();
      expect(product.id).toBe('tractor-001');
      done();
    });
  });

  it('should return variants by product id', (done) => {
    service.getVariantsByProductId('tractor-001').subscribe((variants) => {
      expect(variants.length).toBe(3);
      done();
    });
  });
});
