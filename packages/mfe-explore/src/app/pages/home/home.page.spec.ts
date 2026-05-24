import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render category teasers', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Utility Tractors');
    expect(el.textContent).toContain('Compact Tractors');
    expect(el.textContent).toContain('Heavy Duty Tractors');
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
