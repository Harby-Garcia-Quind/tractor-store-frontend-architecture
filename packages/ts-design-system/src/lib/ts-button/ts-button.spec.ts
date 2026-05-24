import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TsButton } from './ts-button';

describe('TsButton', () => {
  let component: TsButton;
  let fixture: ComponentFixture<TsButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TsButton],
    }).compileComponents();

    fixture = TestBed.createComponent(TsButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
