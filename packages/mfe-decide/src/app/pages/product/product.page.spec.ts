import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import type { Product } from 'shared-catalog';
import { ProductPage } from './product.page';

const MOCK_PRODUCT: Product = {
  id: 'tractor-001',
  name: 'Big Tractor 5000',
  brand: 'Tractor Corp',
  category: 'Utility',
  description: 'A reliable tractor for demanding field work.',
  basePrice: { amount: 25000, currency: 'USD' },
  images: [
    {
      url: 'https://images.unsplash.com/photo-1567416661576-659f9e5c4d43?w=800&q=80',
      alt: 'Big Tractor 5000',
    },
  ],
  availableStores: ['store-1', 'store-2'],
};

describe('ProductPage', () => {
  let component: ProductPage;
  let fixture: ComponentFixture<ProductPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductPage],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({ product: MOCK_PRODUCT }),
            paramMap: of(convertToParamMap({ id: 'tractor-001' })),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render product title', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('h1')?.textContent?.trim()).toBe('Big Tractor 5000');
  });

  it('should render 3 variant options', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelectorAll('ts-variant-option').length).toBe(3);
  });

  it('should update selectedVariantId when a variant is selected', () => {
    component.onVariantSelected('var-blue');
    fixture.detectChanges();
    expect(component.selectedVariantId()).toBe('var-blue');
  });
});
