import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarberIcon } from './barber-icon';

describe('BarberIcon', () => {
  let component: BarberIcon;
  let fixture: ComponentFixture<BarberIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarberIcon],
    }).compileComponents();

    fixture = TestBed.createComponent(BarberIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
