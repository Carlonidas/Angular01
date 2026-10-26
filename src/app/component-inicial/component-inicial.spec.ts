import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentInicialComponent } from './component-inicial';

describe('ComponentInicialComponent', () => {
  let component: ComponentInicialComponent;
  let fixture: ComponentFixture<ComponentInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentInicialComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentInicialComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
