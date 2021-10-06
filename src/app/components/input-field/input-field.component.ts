import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {

  @Input() inputType:string = '';
  @Input() inputId:string='';
  @Input() inputName:string='';
  @Input() isRequired:boolean=false;
  @Input() placeholder:string='';
  @Input() inputModel:string = '';
  @Output() inputModelChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
