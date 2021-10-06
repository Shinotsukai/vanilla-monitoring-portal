import { Component, OnInit, ViewChild } from '@angular/core';
import { ButtonSettings, ColumnSetting, PipeFormat } from 'src/app/components/datatable/datatable.model';
import { RigSettings } from 'src/app/models/dummyData';
import { AlertsService } from 'src/app/services/alerts.service';
import { TestDataService } from 'src/app/services/testData.service';
import { AddRigScreenComponent } from './add-rig-screen/add-rig-screen.component';
import { EditRigScreenComponent } from './edit-rig-screen/edit-rig-screen.component';

@Component({
  selector: 'app-manage-rigs',
  templateUrl: './manage-rigs.component.html',
  styleUrls: ['./manage-rigs.component.css']
})
export class ManageRigsComponent implements OnInit {

  // add rig
  @ViewChild(AddRigScreenComponent) addRig:any;
  @ViewChild(EditRigScreenComponent) updateRig:any;

  toastOptions = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  showModal:boolean=false;
  showEditModal:boolean=false;
  selectedRig:any;
  rigData:any;
  rigSettings:ColumnSetting[]=[
    {primaryKey:'name', header:'Rig Name'},
    {primaryKey:'location', header:'Rig Location'},
    {primaryKey:'slots',header:'Total Devices',format:PipeFormat.COUNT}
  ];

  rigButtons:ButtonSettings[]=[
    { title:'edit', class:['is-info'],params:['_id'], func:(_id:any)=>{
      this.editRig(_id)
    }},
    { title:'delete', class:['is-danger'],params:['_id'], func:(_id:any)=>{
      this.removeRig(_id)
    }}
 
   ]

  constructor(private testData:TestDataService, private alertService:AlertsService) { }

  ngOnInit(): void {
    this.rigData = this.testData.getRigList();
  }

  addRigTest(){


    // let dummy={
    //   _id: Math.floor(Math.random() * 100) + 1,
    //   name:'Test Rig added',
    //   location:'Internet',
    //   slots:[]
    // }
    // console.log(this.addRig.newRig.value)
    this.rigData.push(this.addRig.newRig.value);
    this.alertService.info('New room added successfully',this.toastOptions);
  }

  removeRig(key:any){
    this.rigData.forEach((value:any,index:any) => {
      
      if(value._id == key){
        this.rigData.splice(index,1);
      }
    });

  }

  editRig(key:any){
    this.selectedRig = key;
    this.showEditModal = true;
  }

  updateRigDetails(){

    this.rigData.map((item:any,i:number) =>{
      if(item._id == this.updateRig.newRig.value._id){
        this.rigData[i] = this.updateRig.newRig.value
      }
    })

    this.showEditModal = !this.showEditModal


  }

  testModal(){
    this.showModal = !this.showModal
  }

  testSave(){
    this.addRigTest();
    this.testModal();
  }

}
