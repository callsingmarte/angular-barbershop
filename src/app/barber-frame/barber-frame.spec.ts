import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarberFrame } from './barber-frame';

describe('BarberFrame', () => {
  let component: BarberFrame;
  let fixture: ComponentFixture<BarberFrame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarberFrame],
    }).compileComponents();

    fixture = TestBed.createComponent(BarberFrame);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
