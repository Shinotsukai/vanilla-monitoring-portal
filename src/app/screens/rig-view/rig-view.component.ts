import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceDetails, dummySensorData, RigSettings } from 'src/app/models/dummyData';
import { TestDataService } from 'src/app/services/testData.service';
import { fadeInOut } from 'src/app/utils/fadeAnimation';

@Component({
  selector: 'app-rig-view',
  templateUrl: './rig-view.component.html',
  styleUrls: ['./rig-view.component.css'],
  animations:[fadeInOut],
})
export class RigViewComponent implements OnInit {

  pageLoad:boolean=false;


  dropList:RigSettings[]=[];
  rigList:RigSettings[]=[];

  sensorData:dummySensorData[]=[];
  deviceData:DeviceDetails[]=[];

  selectActive:boolean=false;

  selectedRoom:string='All Rooms'

  constructor(private cdr:ChangeDetectorRef, private testDataService:TestDataService, private router:Router) { }

  ngOnInit(): void {
    this.sensorData = this.testDataService.getSensorData();
    this.rigList = this.testDataService.getRigList();
    this.dropList = this.testDataService.getRigList();
    this.deviceData = this.testDataService.getDeviceData();
  }

  ngAfterViewInit() {
    this.pageLoad = true;
    this.cdr.detectChanges();
  }

  onDropClick(){
    this.selectActive = !this.selectActive

  }

  onSelectRoom(active:any){
    this.selectedRoom = active;
    this.onDropClick();
    this.filterRigs();
  }

  filterRigs(){
    if(this.selectedRoom === 'All Rooms'){
      this.rigList = this.testDataService.getRigList()
      this.cdr.detectChanges();
    } else {
      this.rigList = this.testDataService.getSingleRig(this.selectedRoom);
      this.cdr.detectChanges();
    }
  }

  viewRecord(record:any){
    this.router.navigate(['portal/sensor-data',record])
  }

}
