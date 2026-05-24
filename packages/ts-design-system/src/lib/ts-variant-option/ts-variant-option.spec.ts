import { ComponentFixture, TestBed } from '@angular/core/testing';
import type { Variant } from 'shared-catalog';
import { TsVariantOption } from './ts-variant-option';

const mockVariant: Variant = {
  id: 'var-1',
  productId: 'prod-1',
  name: 'PowerTrac 50 — Green / 50HP',
  sku: 'PT50-GRN-50HP',
  color: 'Green',
  engine: '50HP Diesel',
  price: { amount: 18500, currency: 'USD' },
  stock: 5,
};

describe('TsVariantOption', () => {
  let component: TsVariantOption;
  let fixture: ComponentFixture<TsVariantOption>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TsVariantOption],
    }).compileComponents();

    fixture = TestBed.createComponent(TsVariantOption);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('variant', mockVariant);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render variant name', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.ts-variant-option__name')?.textContent?.trim()).toBe(
      'PowerTrac 50 — Green / 50HP',
    );
  });

  it('should apply selected class when selected input is true', () => {
    fixture.componentRef.setInput('selected', true);
    fixture.detectChanges();
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(button.classList.contains('ts-variant-option--selected')).toBe(true);
  });

  it('should not apply selected class when selected input is false', () => {
    fixture.componentRef.setInput('selected', false);
    fixture.detectChanges();
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(button.classList.contains('ts-variant-option--selected')).toBe(false);
  });

  it('should emit variant id when clicked', () => {
    const emitted: string[] = [];
    const sub = component.variantSelected.subscribe((id) => emitted.push(id));

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();

    expect(emitted).toEqual(['var-1']);
    sub.unsubscribe();
  });
});
