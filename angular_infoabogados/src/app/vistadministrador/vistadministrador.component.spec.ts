import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistadministradorComponent } from './vistadministrador.component';

describe('VistadministradorComponent', () => {
  let component: VistadministradorComponent;
  let fixture: ComponentFixture<VistadministradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistadministradorComponent]
    });
    fixture = TestBed.createComponent(VistadministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
