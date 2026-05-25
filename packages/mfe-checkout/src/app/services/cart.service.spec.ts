import { TestBed } from '@angular/core/testing';
import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a cart', (done) => {
    service.getCart().subscribe((cart) => {
      expect(cart).toBeTruthy();
      expect(cart.items.length).toBe(2);
      done();
    });
  });

  it('should submit checkout', (done) => {
    service.submitCheckout({}).subscribe((result) => {
      expect(result.orderId).toBe('order-001');
      done();
    });
  });
});
