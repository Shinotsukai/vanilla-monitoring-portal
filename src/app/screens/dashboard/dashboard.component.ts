import { Component, OnInit } from '@angular/core';
import { ButtonSettings } from 'src/app/components/datatable/datatable.model';
import { dummyData } from 'src/app/models/dummyData';
import { TestDataService } from 'src/app/services/testData.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  testData:dummyData[]=[];

  buttonTest:ButtonSettings[]=[
   { title:'open', class:['is-info'],params:[], func:()=>{this.tableButtonTest()}},
   { title:'delete', class:['is-danger']}

  ]

  constructor( private testDataService:TestDataService) { }

  ngOnInit(): void {
this.testData = this.testDataService.getTestData();

  }

  tableButtonTest(){
console.log('table button test')
  }

}
