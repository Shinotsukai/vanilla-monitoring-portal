import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRigScreenComponent } from './add-rig-screen.component';

describe('AddRigScreenComponent', () => {
  let component: AddRigScreenComponent;
  let fixture: ComponentFixture<AddRigScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRigScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRigScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
