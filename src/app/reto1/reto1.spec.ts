import { ComponentFixture, TestBed } from '@angular/core/testing';
import { reto1 } from './reto1'; // <--- Asegúrate de usar el nombre correcto de tu clase

describe('Reto1Component', () => {
  let component: reto1;
  let fixture: ComponentFixture<reto1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [reto1], // <--- Aquí también
    }).compileComponents();

    fixture = TestBed.createComponent(reto1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});