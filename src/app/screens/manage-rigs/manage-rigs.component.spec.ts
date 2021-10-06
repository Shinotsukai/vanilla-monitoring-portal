import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRigsComponent } from './manage-rigs.component';

describe('ManageRigsComponent', () => {
  let component: ManageRigsComponent;
  let fixture: ComponentFixture<ManageRigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageRigsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
