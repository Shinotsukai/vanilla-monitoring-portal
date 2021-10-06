import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-rig-screen',
  templateUrl: './add-rig-screen.component.html',
  styleUrls: ['./add-rig-screen.component.css']
})
export class AddRigScreenComponent implements OnInit {

  newRig = new FormGroup({
    _id: new FormControl(Math.floor(Math.random() * 100) + 1),
    name: new FormControl(''),
    location: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

}
