import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RigViewComponent } from './rig-view.component';
import { RouterModule } from '@angular/router';
import { CardTileModule } from 'src/app/components/card-tile/card-tile.module';
import { SensorGridModule } from 'src/app/components/sensor-grid/sensor-grid.module';
import { SharedModule } from 'src/app/shared.module';



@NgModule({
  declarations: [RigViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'', pathMatch:'full', component:RigViewComponent}
    ]),
    CardTileModule,
    SensorGridModule,
    SharedModule
    
  ]
})
export class RigViewModule { }
