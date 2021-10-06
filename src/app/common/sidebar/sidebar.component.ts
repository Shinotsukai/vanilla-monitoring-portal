import { Component, Input, OnInit } from '@angular/core';
import { SideBarData } from 'src/app/models/sidebar.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() sideBarData:SideBarData[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
