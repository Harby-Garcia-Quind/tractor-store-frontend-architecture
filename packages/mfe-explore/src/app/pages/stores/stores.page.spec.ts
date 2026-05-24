import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoresPage } from './stores.page';

describe('StoresPage', () => {
  let fixture: ComponentFixture<StoresPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoresPage],
    }).compileComponents();

    fixture = TestBed.createComponent(StoresPage);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render stores', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Main Street Tractors');
    expect(el.textContent).toContain('Nashville');
    expect(el.textContent).toContain('AgriPro Center');
  });
});

