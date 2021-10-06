import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { CardTileModule } from 'src/app/components/card-tile/card-tile.module';
import { TopCardModule } from 'src/app/components/top-card/top-card.module';
import { ListContainerModule } from 'src/app/components/list-container/list-container.module';
import { ListItemModule } from 'src/app/components/list-item/list-item.module';
import { HeroSectionModule } from 'src/app/components/hero-section/hero-section.module';
import { DatatableModule } from 'src/app/components/datatable/datatable.module';
import { SensorGridModule } from 'src/app/components/sensor-grid/sensor-grid.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'', pathMatch:'full', component:DashboardComponent}
    ]),
    HeroSectionModule,
    CardTileModule,
    TopCardModule,
    ListContainerModule,
    ListItemModule,
    DatatableModule,
    SensorGridModule
  ]
})
export class DashboardModule { }
