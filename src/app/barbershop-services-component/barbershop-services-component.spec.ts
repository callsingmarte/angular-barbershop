import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarbershopServicesComponent } from './barbershop-services-component';

describe('BarbershopServicesComponent', () => {
  let component: BarbershopServicesComponent;
  let fixture: ComponentFixture<BarbershopServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarbershopServicesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BarbershopServicesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
