import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle, ApexStroke } from 'ng-apexcharts';
import { setChart } from './chartOptions.model';
export type ChartOptions = { series: ApexAxisChartSeries; chart: ApexChart; stroke:ApexStroke; xaxis: ApexXAxis; title: ApexTitleSubtitle; };
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnChanges {

  @ViewChild("chart") chart:any;
  public chartOptions:any;

  @Input() chartValues:any;
  @Input() chartLabels:any;
  @Input() chartType:any;
  @Input() sparkLine:any;
  @Input() chartHeight:any;
  @Input() chartStroke:any;

  constructor() { 
  }


  ngOnChanges(): void {
    this.chartOptions = setChart(this.chartValues, this.chartType, this.sparkLine, this.chartHeight, this.chartStroke);
  }



}
