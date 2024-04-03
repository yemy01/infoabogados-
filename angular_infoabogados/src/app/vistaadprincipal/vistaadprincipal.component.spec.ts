import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaadprincipalComponent } from './vistaadprincipal.component';

describe('VistaadprincipalComponent', () => {
  let component: VistaadprincipalComponent;
  let fixture: ComponentFixture<VistaadprincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaadprincipalComponent]
    });
    fixture = TestBed.createComponent(VistaadprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
