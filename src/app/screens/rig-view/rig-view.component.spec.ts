import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigViewComponent } from './rig-view.component';

describe('RigViewComponent', () => {
  let component: RigViewComponent;
  let fixture: ComponentFixture<RigViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RigViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RigViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
