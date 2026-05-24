import { ComponentFixture, TestBed } from '@angular/core/testing';
import type { ProductSummary } from 'shared-catalog';
import { TsProductCard } from './ts-product-card';

const mockProduct: ProductSummary = {
  id: 'prod-1',
  name: 'Green Tractor X100',
  brand: 'TractorCo',
  category: 'Tractors',
  basePrice: { amount: 29999, currency: 'USD' },
  primaryImageUrl: 'https://example.com/tractor.jpg',
};

describe('TsProductCard', () => {
  let component: TsProductCard;
  let fixture: ComponentFixture<TsProductCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TsProductCard],
    }).compileComponents();

    fixture = TestBed.createComponent(TsProductCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('product', mockProduct);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render product name', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.ts-product-card__title')?.textContent?.trim()).toBe(
      'Green Tractor X100',
    );
  });

  it('should emit selected product id when button is clicked', () => {
    const emitted: string[] = [];
    const sub = component.selected.subscribe((id) => emitted.push(id));

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();

    expect(emitted).toEqual(['prod-1']);
    sub.unsubscribe();
  });
});
