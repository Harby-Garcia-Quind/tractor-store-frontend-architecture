import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryPage } from './category.page';

describe('CategoryPage', () => {
  let fixture: ComponentFixture<CategoryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryPage);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render Category Page title', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('h1')?.textContent?.trim()).toBe('Category Page');
  });
});
