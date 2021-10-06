import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { ButtonSettings, ColumnSetting } from './datatable.model';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css'],
})
export class DatatableComponent implements OnInit {
  @Input() dataSource: any[] = [];
  @Input() childKey: string = '';
  @Input() settings: ColumnSetting[] = [];
  @Input() expandedSettings: ColumnSetting[] = [];
  @Input() rowButtons: ButtonSettings[] = [];
  @Input() expandedRowButtons: ButtonSettings[] = [];

  primaryColumnMap: ColumnSetting[] = [];
  expandedColumnMap: ColumnSetting[] = [];
  show: any = {};

  constructor() {}

  ngOnInit(): void {
    this.checkPrimaryData();
    if (this.childKey) {
      this.checkChildData();
    }
  }

  checkPrimaryData() {
    
    if (!this.rowButtons) {
      this.rowButtons = [];
    }



    if (this.settings.length > 1) {
      this.primaryColumnMap = this.settings;
    } else {
      this.primaryColumnMap = Object.keys(this.dataSource[0]).map((key) => {

        return {
          primaryKey: key,
          header:
            key.slice(0, 1).toUpperCase() + key.replace(/_/g, ' ').slice(1),
          format: 0,
        };
      });
    }
  }

  checkChildData() {
    if (!this.expandedRowButtons) {
      this.expandedRowButtons = [];
    }

    if (this.expandedSettings) {
      this.expandedColumnMap = this.expandedSettings;
    } else {
      this.expandedColumnMap = Object.keys(
        this.dataSource[0][this.childKey[0]]
      ).map((key) => {
        return {
          primaryKey: key,
          header:
            key.slice(0, 1).toUpperCase() + key.replace(/_/g, ' ').slice(1),
          format: 0,
        };
      });
    }
  }

  toggleRow(i:any){
    this.show[i] = !this.show[i];
    if(this.show[i]){
      console.log(this.show[i])
      console.log(this.dataSource[i][this.primaryColumnMap[0].primaryKey]);
    }
  }
  
  buttonClick(record:any,func:any,values:any){
    func(...values.map((val:any)=>record[val]))
  }
}
