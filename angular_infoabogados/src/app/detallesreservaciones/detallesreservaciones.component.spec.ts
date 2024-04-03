import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesreservacionesComponent } from './detallesreservaciones.component';

describe('DetallesreservacionesComponent', () => {
  let component: DetallesreservacionesComponent;
  let fixture: ComponentFixture<DetallesreservacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesreservacionesComponent]
    });
    fixture = TestBed.createComponent(DetallesreservacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
