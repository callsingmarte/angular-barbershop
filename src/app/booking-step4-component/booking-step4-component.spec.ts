import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookingStep4Component } from './booking-step4-component';

describe('BookingStep4Component', () => {
  let component: BookingStep4Component;
  let fixture: ComponentFixture<BookingStep4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingStep4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(BookingStep4Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
