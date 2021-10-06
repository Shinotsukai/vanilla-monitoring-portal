import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRigScreenComponent } from './edit-rig-screen.component';

describe('EditRigScreenComponent', () => {
  let component: EditRigScreenComponent;
  let fixture: ComponentFixture<EditRigScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRigScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRigScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
