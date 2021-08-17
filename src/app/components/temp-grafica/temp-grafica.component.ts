import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { TermometrofireService } from "../../services/termometrofire.service";

@Component({
  selector: 'app-temp-grafica',
  templateUrl: './temp-grafica.component.html',
  styleUrls: ['./temp-grafica.component.css']
})
export class TempGraficaComponent implements OnInit {

  lineChartData: ChartDataSets[] = [
    { data: [], label: '' },
  ];

  lineChartLabels: Label[] = [];

  lineChartOptions = {
    responsive: true,
  };

  lineChartType = 'line';

  userData: any = {};


  constructor(
    private termometroService: TermometrofireService
  ) {
    this.userData = JSON.parse(localStorage.getItem('user')||'{}');
   }

  ngOnInit(): void {
    this.getDataGrafic();
    this.getDateGrafic();
  }

  getDataGrafic(){
    this.termometroService.getDataGrafic(this.userData.username).subscribe((data: any) => {
      this.lineChartData = data;
    });
  }

  getDateGrafic(){
    this.termometroService.getDateGrafic(this.userData.username).subscribe((data: any) => {
      //console.log(data)
      this.lineChartLabels = data;
    });
  }

}
