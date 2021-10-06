import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-screen',
  templateUrl: './display-screen.component.html',
  styleUrls: ['./display-screen.component.css']
})
export class DisplayScreenComponent implements OnInit {

  time:any;

  constructor() { }

  ngOnInit(): void {
    this.getCurrentDate();
  }

  getCurrentDate(){
    setInterval(()=>{
      this.time = new Date();
    }, 1000);
  }

}
