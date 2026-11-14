import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterServices } from './footer-services';

describe('FooterServices', () => {
  let component: FooterServices;
  let fixture: ComponentFixture<FooterServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterServices],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterServices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
