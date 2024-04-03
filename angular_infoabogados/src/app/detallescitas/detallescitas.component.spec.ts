import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallescitasComponent } from './detallescitas.component';

describe('DetallescitasComponent', () => {
  let component: DetallescitasComponent;
  let fixture: ComponentFixture<DetallescitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallescitasComponent]
    });
    fixture = TestBed.createComponent(DetallescitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
