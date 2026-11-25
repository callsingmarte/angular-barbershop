import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarberServicesBookingComponent } from './barber-services-booking-component';

describe('BarberServicesBookingComponent', () => {
  let component: BarberServicesBookingComponent;
  let fixture: ComponentFixture<BarberServicesBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarberServicesBookingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BarberServicesBookingComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
