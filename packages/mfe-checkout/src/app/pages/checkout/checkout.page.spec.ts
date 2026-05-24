import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CheckoutPage } from './checkout.page';

describe('CheckoutPage', () => {
  let component: CheckoutPage;
  let fixture: ComponentFixture<CheckoutPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutPage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start invalid', () => {
    expect(component.form.valid).toBe(false);
  });

  it('should become valid with valid data', () => {
    component.form.setValue({
      fullName: 'John Doe',
      email: 'john@example.com',
      address: '123 Main St',
      city: 'Springfield',
      country: 'USA',
    });
    expect(component.form.valid).toBe(true);
  });

  it('should report isFormDirtyAndNotSubmitted when form is dirty', () => {
    component.form.markAsDirty();
    expect(component.isFormDirtyAndNotSubmitted).toBe(true);
  });

  it('should not report isFormDirtyAndNotSubmitted when form is pristine', () => {
    expect(component.isFormDirtyAndNotSubmitted).toBe(false);
  });
});
