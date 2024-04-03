import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuInicioComponent } from './menu-inicio.component';

describe('MenuInicioComponent', () => {
  let component: MenuInicioComponent;
  let fixture: ComponentFixture<MenuInicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuInicioComponent]
    });
    fixture = TestBed.createComponent(MenuInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
