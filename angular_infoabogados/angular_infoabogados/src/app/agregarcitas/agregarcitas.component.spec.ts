import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarcitasComponent } from './agregarcitas.component';

describe('AgregarcitasComponent', () => {
  let component: AgregarcitasComponent;
  let fixture: ComponentFixture<AgregarcitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarcitasComponent]
    });
    fixture = TestBed.createComponent(AgregarcitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
