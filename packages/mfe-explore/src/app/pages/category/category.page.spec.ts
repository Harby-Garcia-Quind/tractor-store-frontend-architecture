import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { CategoryPage } from './category.page';

describe('CategoryPage', () => {
  let fixture: ComponentFixture<CategoryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryPage],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { paramMap: of(convertToParamMap({ id: 'utility' })) },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryPage);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render category title', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('h1')?.textContent?.trim()).toContain('Category:');
  });

  it('should render product cards', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelectorAll('ts-product-card').length).toBe(3);
  });
});

