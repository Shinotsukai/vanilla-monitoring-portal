import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditRigScreenComponent } from './edit-rig-screen.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [EditRigScreenComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[EditRigScreenComponent]
})
export class EditRigScreenModule { }
