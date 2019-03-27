import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
 // styleUrls: ['./grafico-dona.component.css'],
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input('chartLabels') doughnutChartLabels: string[] = [];
  @Input('chartData') doughnutChartData: number[] = [];
  @Input('chartType') doughnutChartType: string = '';

  constructor() { }

  ngOnInit() {
  }

}
