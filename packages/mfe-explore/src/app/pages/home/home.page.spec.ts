import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePage],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 3 product cards', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelectorAll('ts-product-card').length).toBe(3);
  });

  it('should update selectedProductId when a product is selected', () => {
    component.onProductSelected('prod-2');
    fixture.detectChanges();
    expect(component.selectedProductId()).toBe('prod-2');
  });
});
