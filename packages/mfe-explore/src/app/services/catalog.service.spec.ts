import { TestBed } from '@angular/core/testing';
import { CatalogService } from './catalog.service';

describe('CatalogService', () => {
  let service: CatalogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return home products', (done) => {
    service.getHomeProducts().subscribe((products) => {
      expect(products.length).toBeGreaterThan(0);
      done();
    });
  });

  it('should return category products', (done) => {
    service.getCategoryProducts('utility').subscribe((products) => {
      expect(products.length).toBeGreaterThan(0);
      done();
    });
  });

  it('should return stores', (done) => {
    service.getStores().subscribe((stores) => {
      expect(stores.length).toBeGreaterThan(0);
      done();
    });
  });
});
