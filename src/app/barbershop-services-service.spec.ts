import { TestBed } from '@angular/core/testing';
import { BarbershopServicesService } from './barbershop-services-service';

describe('BarbershopServicesService', () => {
  let service: BarbershopServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarbershopServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
