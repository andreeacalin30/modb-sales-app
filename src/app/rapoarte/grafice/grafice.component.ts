import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexStroke
} from "ng-apexcharts";
import { SalesService } from 'src/app/services/sales.service';

export type MultiBarChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
};
@Component({
  selector: 'app-grafice',
  templateUrl: './grafice.component.html',
  styleUrls: ['./grafice.component.scss']
})
export class GraficeComponent implements OnInit {
  public chartType: string = 'bar';
  
  public chartDatasetsVanzareTotalaGrupe: Array<any> = [
    { data: [], label: 'Vanzare Totala Per Grupe Articole' }
  ];
  public chartLabelsGrupe: Array<any> = [];
  
  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public vanzariGrupaArticole: Array<any> = [];
  public cantitatiJudete: Array<any> = [];
  public chartDatasetsCantitatiJudete: Array<any> = [];
  public chartLabelsGrupeMultiBar: Array<any> = [];
  public red='rgba(255, 99, 132, 0.2)'
  public blue='rgba(54, 162, 235, 0.2)'
  public yellow='rgba(255, 206, 86, 0.2)'
  public green='rgba(75, 192, 192, 0.2)'
  public purple='rgba(255, 99, 132, 0.2)'
  public orange='rgba(255, 159, 64, 0.2)'
  public colors=[this.red, this.blue, this.yellow, this.green, this.purple, this.orange]
  public red_b='rgba(255,99,132,1)'
  public blue_b='rgba(54, 162, 235, 1)'
  public yellow_b='rgba(255, 206, 86, 1)'
  public green_b='rgba(75, 192, 192, 1)'
  public purple_b='rgba(153, 102, 255, 1)'
  public orange_b='rgba(255, 159, 64, 1)'
  public borders=[this.red_b, this.blue_b, this.yellow_b, this.green_b, this.purple_b, this.orange_b]
  
  public chartColorsMultiBar: Array<any> = [
    
  ];

  public chart1Ready=false;
  public chart2Ready=false;
  constructor(private salesService: SalesService) {
  this.getCantitatJudete();
   }

   ngOnInit() {
    this.chartDatasetsVanzareTotalaGrupe= [
      { data: [], label: 'Vanzare Totala Per Grupe Articole' }
    ];
    this.getVanzariGrupaArticole();
    console.log(this.chartDatasetsVanzareTotalaGrupe)
  }

  async getVanzariGrupaArticole(){
    this.vanzariGrupaArticole=await this.salesService.getVanzariGrupeArticole().toPromise();
    console.log(this.vanzariGrupaArticole)
    for(let i=0; i<this.vanzariGrupaArticole.length; i++){
      this.chartDatasetsVanzareTotalaGrupe[0].data.push(this.vanzariGrupaArticole[i].VanzareTotala)
      this.chartLabelsGrupe.push(this.vanzariGrupaArticole[i].NumeGrupa)
    }
    this.chart1Ready=true;
    console.log( this.chartDatasetsVanzareTotalaGrupe)
    console.log( this.chartLabelsGrupe)
  }

  async getCantitatJudete(){
  
    this.cantitatiJudete=await this.salesService.getCantitatiJudete().toPromise();
    console.log(this.cantitatiJudete)
    let existingUM=Array.from(new Set(this.cantitatiJudete.map((item: any) => item.Um)))
    let existingJudete=Array.from(new Set(this.cantitatiJudete.map((item: any) => item.Judet)))
    console.log(existingJudete)
    for(let i=0; i<existingJudete.length; i++){
      var noQuotesJud = existingJudete[i].split('"').join('');
      this.chartLabelsGrupeMultiBar.push(noQuotesJud)
    }

    for(let j=0; j< existingUM.length; j++){
      var noQuotes = existingUM[j].split('"').join('');
      console.log(noQuotes)
      let dataObj={ data: [], label: noQuotes }
      let colorObj={
        backgroundColor: [],
        borderColor: [],
        borderWidth: 2,
      }
    
      for(let i=0; i<this.cantitatiJudete.length; i++){
        if(this.cantitatiJudete[i].Um==existingUM[j]){
          dataObj.data.push(this.cantitatiJudete[i].CantitateMedie)
          colorObj.backgroundColor.push(this.colors[j])
          colorObj.borderColor.push(this.borders[j])
        }
      }
      this.chartColorsMultiBar.push(colorObj)
      
      this.chartDatasetsCantitatiJudete.push(dataObj)
      this.chart2Ready=true;
      console.log( this.chartDatasetsCantitatiJudete)
    }
  }
}
