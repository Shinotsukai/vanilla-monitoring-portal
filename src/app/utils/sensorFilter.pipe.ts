import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'slotData'})

export class SlotDataPipe implements PipeTransform{
    constructor(){}

    transform(items:any[],value:any){

      if(!value){
          return items
      }
 let filtered = items.filter( item => {
     if(item.device_name === value){
        return item
     }
 })

      return filtered
    }
}