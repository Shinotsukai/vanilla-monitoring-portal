import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SensorDataComponent } from './sensor-data.component';
import { RouterModule } from '@angular/router';
import { CardTileModule } from 'src/app/components/card-tile/card-tile.module';
import { TopCardModule } from 'src/app/components/top-card/top-card.module';
import { ChartModule } from 'src/app/components/chart/chart.module';
import { ListContainerModule } from 'src/app/components/list-container/list-container.module';
import { ListItemModule } from 'src/app/components/list-item/list-item.module';



@NgModule({
  declarations: [SensorDataComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'', pathMatch:'full', component:SensorDataComponent}
    ]),
    CardTileModule,
    TopCardModule,
    ChartModule,
    ListContainerModule,
    ListItemModule
  ]
})
export class SensorDataModule { }
