import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordarClaveComponent } from './recordar-clave.component';

describe('RecordarClaveComponent', () => {
  let component: RecordarClaveComponent;
  let fixture: ComponentFixture<RecordarClaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordarClaveComponent]
    });
    fixture = TestBed.createComponent(RecordarClaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
