import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookingStep3Component } from './booking-step3-component';

describe('BookingStep3Component', () => {
  let component: BookingStep3Component;
  let fixture: ComponentFixture<BookingStep3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingStep3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(BookingStep3Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
