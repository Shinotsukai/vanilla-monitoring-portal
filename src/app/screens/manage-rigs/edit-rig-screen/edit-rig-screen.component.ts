import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TestDataService } from 'src/app/services/testData.service';

@Component({
  selector: 'app-edit-rig-screen',
  templateUrl: './edit-rig-screen.component.html',
  styleUrls: ['./edit-rig-screen.component.css']
})
export class EditRigScreenComponent implements OnInit {
@Input() record:any;

selectedRig:any;

newRig = new FormGroup({
  _id: new FormControl(new Date()),
  name: new FormControl(''),
  location: new FormControl(''),
  slots: new FormControl([])
})

  constructor(private testDataService:TestDataService) { }

  ngOnInit(): void {
   this.selectedRig = this.testDataService.getRigById(this.record)
   this.addValuesToForm(this.selectedRig[0]);


  }

  addValuesToForm(value:any){
    this.newRig.setValue({
      _id:value._id,
      name:value.name,
      location:value.location,
      slots:value.slots
    })
  }

}
