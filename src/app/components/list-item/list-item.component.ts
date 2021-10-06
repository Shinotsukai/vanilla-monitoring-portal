import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() icon:string='';
  @Input() title:string='';
  @Input() message:string='';
  @Input() showRight:boolean=true;
  @Input() info:string='';
  @Input() infoColor:string='';


  constructor() { }

  ngOnInit(): void {
  }

}
