import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterDecoration } from './footer-decoration';

describe('FooterDecoration', () => {
  let component: FooterDecoration;
  let fixture: ComponentFixture<FooterDecoration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterDecoration],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterDecoration);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
