import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRigScreenComponent } from './add-rig-screen.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddRigScreenComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[AddRigScreenComponent]
})
export class AddRigScreenModule { }
