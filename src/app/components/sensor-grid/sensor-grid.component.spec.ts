import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorGridComponent } from './sensor-grid.component';

describe('SensorGridComponent', () => {
  let component: SensorGridComponent;
  let fixture: ComponentFixture<SensorGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensorGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
