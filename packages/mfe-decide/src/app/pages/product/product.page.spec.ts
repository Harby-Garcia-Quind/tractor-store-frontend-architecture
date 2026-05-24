import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductPage } from './product.page';

describe('ProductPage', () => {
  let component: ProductPage;
  let fixture: ComponentFixture<ProductPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductPage],
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
