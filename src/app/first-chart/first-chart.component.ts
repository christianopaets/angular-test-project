import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-first-chart',
  templateUrl: './first-chart.component.html',
  styleUrls: ['./first-chart.component.scss']
})
export class FirstChartComponent implements AfterViewInit {

  @ViewChild('chart')
  private readonly _canvas: ElementRef<HTMLCanvasElement>;

  private _chart: Chart;

  constructor() { }

  ngAfterViewInit(): void {
    const averageVegetation = new Array(30).fill(1).map(() => Math.random());
    this._chart = new Chart(this._canvas.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: new Array(30).fill(1),
        datasets: [
          {
            backgroundColor: 'transparent',
            borderColor: '#0079B8',
            data: new Array(30).fill(1).map(() => Math.round(Math.random() * 400)),
            yAxisID: 'y-precipitations'
          },
          {
            backgroundColor: 'transparent',
            borderColor: '#FF8400',
            data: new Array(30).fill(1).map(() => Math.round(Math.random() * 50)),
            yAxisID: 'y-temperature'
          },
          {
            backgroundColor: 'rgba(47, 132, 0, 0.1)',
            borderWidth: 0,
            borderColor: 'rgba(47, 132, 0, 0.1)',
            data: averageVegetation.map(item => item + 1),
            yAxisID: 'y-vegetation',
            pointRadius: 0,
            fill: '+2'
          },
          {
            backgroundColor: 'transparent',
            borderColor: '#2F8400',
            data: averageVegetation,
            yAxisID: 'y-vegetation',
          },
          {
            backgroundColor: 'transparent',
            borderWidth: 0,
            borderColor: 'rgba(47, 132, 0, 0.1)',
            pointRadius: 0,
            data: averageVegetation.map(item => item - 1),
            yAxisID: 'y-vegetation',
          }
        ]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Chart.js Line Chart - Multi Axis'
        },
        plugins: {
          filler: {
            propagate: false
          }
        },
        scales: {
          yAxes: [
            {
              type: 'linear',
              display: true,
              position: 'left',
              id: 'y-precipitations'
            },
            {
              type: 'linear',
              display: true,
              position: 'right',
              gridLines: {
                drawOnChartArea: false,
              },
              id: 'y-temperature'
            },
            {
              type: 'linear',
              display: false,
              position: 'right',
              gridLines: {
                drawOnChartArea: false,
              },
              id: 'y-vegetation'
            },
            {
              type: 'linear',
              display: false,
              position: 'right',
              gridLines: {
                drawOnChartArea: false,
              },
              id: 'y-vegetation'
            },
            {
              type: 'linear',
              display: false,
              position: 'right',
              gridLines: {
                drawOnChartArea: false,
              },
              id: 'y-vegetation'
            }
          ]
        }
      }
    });
  }

}
