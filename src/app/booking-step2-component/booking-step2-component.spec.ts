import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookingStep2Component } from './booking-step2-component';

describe('BookingStep2Component', () => {
  let component: BookingStep2Component;
  let fixture: ComponentFixture<BookingStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingStep2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(BookingStep2Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
