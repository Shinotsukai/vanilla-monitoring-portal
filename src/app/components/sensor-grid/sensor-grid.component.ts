import { Component, Input, OnInit } from '@angular/core';
import { GridButton, GridSetting } from './sensor-grid.model';

@Component({
  selector: 'app-sensor-grid',
  templateUrl: './sensor-grid.component.html',
  styleUrls: ['./sensor-grid.component.css']
})
export class SensorGridComponent implements OnInit {

  @Input() dataSource:any;
  @Input() settings:GridSetting[]=[];
  @Input() buttons: GridButton[]=[];

  gridMap:GridSetting[]=[];

  constructor() { }

  ngOnInit(): void {
this.gridMap =this.dataSource;

  }

  checkGridData(){
    if(!this.buttons){
      this.buttons = [];
    }

    if(this.settings.length > 1){
      this.gridMap = this.settings;
    } else {

      this.gridMap = Object.keys(this.dataSource[0]).map((key) => {
        return {
          primaryKey: key,
          measure:
            key.slice(0, 1).toUpperCase() + key.replace(/_/g, ' ').slice(1),
          format: 0,
        };
      });
    }
  }

  buttonClick(record:any,func:any,values:any){
    func(...values.map((val:any)=>record[val]))
  }

  iconType(value:any){
    let classType:string='';


    switch(value){
      case "TVOC":
        classType = 'fa-wind'
        break;

        case "Temp":
          classType = 'fa-thermometer-quarter'
          break;
        
        case "Humidity":
          classType = 'fa-humidity'
          break;

          case "Co2":
            classType = 'fa-cloud'
            break;

            case "Pressure":
              classType = 'fa-tachometer-alt'
              break;

          default:
            classType = 'fa-question'
    }




    return classType

  }

}
