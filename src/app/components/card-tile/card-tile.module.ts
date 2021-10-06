import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTileComponent } from './card-tile.component';



@NgModule({
  declarations: [CardTileComponent],
  imports: [
    CommonModule
  ],
  exports:[CardTileComponent]
})
export class CardTileModule { }
