import { Component, OnInit } from '@angular/core';
import { DeviceDetails } from 'src/app/models/dummyData';
import { TestDataService } from 'src/app/services/testData.service';
import { ButtonSettings, ColumnSetting, PipeFormat } from 'src/app/components/datatable/datatable.model';

@Component({
  selector: 'app-manage-devices-screen',
  templateUrl: './manage-devices-screen.component.html',
  styleUrls: ['./manage-devices-screen.component.css']
})
export class ManageDevicesScreenComponent implements OnInit {

  constructor(private testDataService:TestDataService) { }

  showModal:boolean=false;
  dummyDevices:DeviceDetails[]=[];

  tableSettings:ColumnSetting[]=[
    {primaryKey:'device_name', header:'Device Name'},
    {primaryKey:'sensors', header:'Included Sensors'},
    {primaryKey:'dateAdded', header:'Date Added', format:PipeFormat.DATE},
    {primaryKey:'status', header:'Status'},
  ]

  rowButtons:ButtonSettings[]=[
    { title:'edit', class:['is-info'],params:[], func:()=>{this.testModal()}},

 
   ]
  async ngOnInit() {
    await this.getDeviceData();
  }

  testModal(){
    this.showModal = !this.showModal
  }

  async getDeviceData(){

    this.dummyDevices = await this.testDataService.getDeviceData();

  }

}
