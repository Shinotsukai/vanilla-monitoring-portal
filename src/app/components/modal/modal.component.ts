import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() show: boolean = false;
  @Input() title:string = '';
  @Input() showFooter:boolean=true;
  @Output() closed = new EventEmitter();
  @Output() saved = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  saveModal(){
    this.saved.emit();
  }

  closeModal(){
    this.closed.emit();
  }

}
