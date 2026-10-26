import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CasdastroComponent } from './casdastro-component';

describe('CasdastroComponent', () => {
  let component: CasdastroComponent;
  let fixture: ComponentFixture<CasdastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CasdastroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CasdastroComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
