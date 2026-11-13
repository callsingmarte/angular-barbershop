import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuDecoration } from './menu-decoration';

describe('MenuDecoration', () => {
  let component: MenuDecoration;
  let fixture: ComponentFixture<MenuDecoration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuDecoration],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuDecoration);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
