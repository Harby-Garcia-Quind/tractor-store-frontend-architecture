import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThanksPage } from './thanks.page';

describe('ThanksPage', () => {
  let fixture: ComponentFixture<ThanksPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThanksPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ThanksPage);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render confirmation text', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Thank you');
  });
});
