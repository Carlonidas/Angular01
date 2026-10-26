import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroCli } from './cadastro-cli';

describe('CadastroCli', () => {
  let component: CadastroCli;
  let fixture: ComponentFixture<CadastroCli>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroCli],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroCli);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
