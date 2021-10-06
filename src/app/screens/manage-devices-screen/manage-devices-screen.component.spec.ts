import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDevicesScreenComponent } from './manage-devices-screen.component';

describe('ManageDevicesScreenComponent', () => {
  let component: ManageDevicesScreenComponent;
  let fixture: ComponentFixture<ManageDevicesScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageDevicesScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDevicesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
