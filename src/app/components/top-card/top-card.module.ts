import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopCardComponent } from './top-card.component';



@NgModule({
  declarations: [TopCardComponent],
  imports: [
    CommonModule
  ],
  exports:[TopCardComponent]
})
export class TopCardModule { }
