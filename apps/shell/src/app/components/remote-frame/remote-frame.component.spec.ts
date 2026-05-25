import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RemoteFrameComponent } from './remote-frame.component';

describe('RemoteFrameComponent', () => {
  let component: RemoteFrameComponent;
  let fixture: ComponentFixture<RemoteFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoteFrameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RemoteFrameComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('url', 'http://localhost:4201');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render an iframe', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const iframe = compiled.querySelector('iframe');
    expect(iframe).toBeTruthy();
  });
});
