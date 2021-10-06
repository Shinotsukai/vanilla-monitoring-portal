import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DisplayScreenComponent } from './display-screen.component';
import { CardTileModule } from 'src/app/components/card-tile/card-tile.module';



@NgModule({
  declarations: [DisplayScreenComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'', pathMatch:'full', component:DisplayScreenComponent}
    ]),
    CardTileModule
  ]
})
export class DisplayScreenModule { }
