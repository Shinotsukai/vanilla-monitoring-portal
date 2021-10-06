import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-card',
  templateUrl: './top-card.component.html',
  styleUrls: ['./top-card.component.css']
})
export class TopCardComponent implements OnInit {

  @Input() lastUpdated:string='';
  @Input() showHeader:boolean=false;
  @Input() cardTitle:string='';
  @Input() cardValue:string='';
  @Input() showIcon:boolean=true;
  @Input() cardIcon:string='';
  @Input() iconColor:string='';
  @Input() noShadow:boolean=false;


  constructor() { }

  ngOnInit(): void {
  }

}
