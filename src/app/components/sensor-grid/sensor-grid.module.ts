import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SensorGridComponent } from './sensor-grid.component';
import { SharedModule } from 'src/app/shared.module';



@NgModule({
  declarations: [SensorGridComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[SensorGridComponent]
})
export class SensorGridModule { }
