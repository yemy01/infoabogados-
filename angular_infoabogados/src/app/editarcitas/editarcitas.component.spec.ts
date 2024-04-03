import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarcitasComponent } from './editarcitas.component';

describe('EditarcitasComponent', () => {
  let component: EditarcitasComponent;
  let fixture: ComponentFixture<EditarcitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarcitasComponent]
    });
    fixture = TestBed.createComponent(EditarcitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
