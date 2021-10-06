import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageDevicesScreenComponent } from './manage-devices-screen.component';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'src/app/components/modal/modal.module';
import { DatatableModule } from 'src/app/components/datatable/datatable.module';



@NgModule({
  declarations: [ManageDevicesScreenComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'', pathMatch:'full', component:ManageDevicesScreenComponent}
    ]),
    ModalModule,
    DatatableModule
  ]
})
export class ManageDevicesScreenModule { }
