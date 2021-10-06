import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageRigsComponent } from './manage-rigs.component';
import { RouterModule } from '@angular/router';
import { DatatableModule } from 'src/app/components/datatable/datatable.module';
import { CardTileModule } from 'src/app/components/card-tile/card-tile.module';
import { ModalModule } from 'src/app/components/modal/modal.module';
import { AddRigScreenModule } from './add-rig-screen/add-rig-screen.module';
import { EditRigScreenModule } from './edit-rig-screen/edit-rig-screen.module';



@NgModule({
  declarations: [ManageRigsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'', pathMatch:'full', component:ManageRigsComponent}
    ]),
    DatatableModule,
    CardTileModule,
    ModalModule,
    AddRigScreenModule,
    EditRigScreenModule
  ]
})
export class ManageRigsModule { }
