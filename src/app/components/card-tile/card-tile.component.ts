import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-tile',
  templateUrl: './card-tile.component.html',
  styleUrls: ['./card-tile.component.css']
})
export class CardTileComponent implements OnInit {

  @Input() cardTitle:string ='';
  @Input() showTitle:boolean = true;
  @Input() showFooter:boolean = false;
  @Input() showImage:boolean = false;
  @Input() cardImage:string = '';
  @Input() footerButtons:any[] = [];
  @Input() noShadow:boolean=false;

  @Output() onButtonClick = new EventEmitter();



  constructor() { }

  ngOnInit(): void {
  }

  cardFooterButton(i:number){
    this.onButtonClick.emit({
      buttonIndex:i
    })
  }

}
