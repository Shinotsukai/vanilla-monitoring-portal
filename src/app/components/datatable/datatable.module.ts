import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable.component';
import { SharedModule } from 'src/app/shared.module';
import { StyleCellDirective } from './cell-style.directive';



@NgModule({
  declarations: [DatatableComponent,StyleCellDirective],
  imports: [
    CommonModule,SharedModule
  ],
  exports:[DatatableComponent]
})
export class DatatableModule { }
