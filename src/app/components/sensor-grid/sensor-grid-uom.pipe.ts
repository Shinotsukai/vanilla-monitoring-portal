import { Pipe, PipeTransform } from "@angular/core";
import { UOMFormat } from "./sensor-grid.model";

@Pipe({name:'uomFormat'})
export class UOMFormatPipe implements PipeTransform{
    constructor(){}
    transform(value:any, format:UOMFormat = 0){

        if(value === undefined){
            return 'N/A'
        }

        if (format === 1){
            return 'PPM'
        }


        if (format === 2){
            return 'PPB'
        }


        if (format === 3){
            return 'UG/m3'
        }


        if (format === 4){
            return '%'
        }


        if (format === 5){
            return '°C'
        }


        return value;
    }
}