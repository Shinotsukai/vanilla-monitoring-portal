import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe, DatePipe, PercentPipe } from '@angular/common';
import { PipeFormat } from './datatable.model';

@Pipe({ name: 'cellFormat' })
export class CellFormatPipe implements PipeTransform {
  constructor(private datePipe: DatePipe,private currencyPipe:CurrencyPipe,private percentPipe:PercentPipe) {}

  transform(value: any, format: PipeFormat = 0, nested:any=false) {
    if (value === undefined) {
      return 'Data Unavailable';
    }
    
    if (format === 0) {
      if (Array.isArray(value)) {

        if (typeof value[0] !== 'object') {
          

          return value.join(', ');
        } else {


            return value
              .map((obj) => {
                return obj.sensorType;
              })
              .join(', ');
          


        }
      }

      // // if (typeof value === 'object') {
      // //   if(nested.length ){
      // //     console.log(nested)
      // //     return value[nested]
      // //   }
      // }
    }


    if (format === 1) {
        return this.currencyPipe.transform(value);
      }

    if (format === 2) {
      return this.datePipe.transform(value, 'dd/MM/yyyy HH:mm:ss');
    }


    if (format === 3) {
        return this.percentPipe.transform(value);
      }

      if (format === 4){
        return value.length;
      }

    return value;
  }
}
