import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarberServices } from './barber-services';

describe('BarberServices', () => {
  let component: BarberServices;
  let fixture: ComponentFixture<BarberServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarberServices],
    }).compileComponents();

    fixture = TestBed.createComponent(BarberServices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
