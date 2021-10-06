import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestDataService } from 'src/app/services/testData.service';

@Component({
  selector: 'app-sensor-data',
  templateUrl: './sensor-data.component.html',
  styleUrls: ['./sensor-data.component.css']
})
export class SensorDataComponent implements OnInit {

  record:any;
  chartType:string = 'bar';

  testVals:any = [{name:'test',data:this.generateDayTimeData(new Date().getTime(),20,{min:10,max:60})}];

  constructor(private route:ActivatedRoute, private router:Router, private testDataService:TestDataService, private cdr:ChangeDetectorRef) { }

 async ngOnInit() {
    this.route.params.subscribe(async(params)=>{

     this.record = this.testDataService.getSingleDevice(params.id);
      console.log(this.record)
    })
  }

  kioskMode(){
    const url = this.router.serializeUrl(
      this.router.createUrlTree([`display/${this.record[0].device_name}`
      ])
    );
    window.open(url,'_blank');
  }

  // Move to a service for random data

  generateDayTimeData(val:any,count:number,range:any){
    var i = 0;
    var data = [];
    while (i < count) {
      var y = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
  
      data.push([val, y]);
      val += 86400000;
      i++;
    }
    return data;

  }

  newTestData(){
    this.testVals = [{name:'test',data:this.generateDayTimeData(new Date().getTime(),20,{min:10,max:60})}];
    if(this.chartType === 'bar'){
      this.chartType = 'line'
    } else {this.chartType = 'bar'}

  }


}
