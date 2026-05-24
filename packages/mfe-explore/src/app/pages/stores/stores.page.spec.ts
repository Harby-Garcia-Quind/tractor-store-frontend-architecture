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

  it('should render Stores Page title', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('h1')?.textContent?.trim()).toBe('Stores Page');
  });
});
