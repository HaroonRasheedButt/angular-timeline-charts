import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexDataLabels,
  ApexYAxis,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
};
@Component({
  selector: 'app-apexcharts-timeline-graph',
  templateUrl: './apexcharts-timeline-graph.component.html',
  styleUrls: ['./apexcharts-timeline-graph.component.css']
})
export class ApexchartsTimelineGraphComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: ChartOptions;
  constructor() {
    this.chartOptions = {
      series: [
        {
          data: [
            {
              x: 'leads.demo',
              y: [
                new Date('2019-02-25').getTime(),
                new Date('2019-03-04').getTime()
              ],
              fillColor: '#008FFB'
            },
            {
              x: 'salesforce.demo',
              y: [
                new Date('2019-02-27').getTime(),
                new Date('2019-03-08').getTime()
              ],
              fillColor: '#00E396'
            },
            {
              x: 'egr.demo',
              y: [
                new Date('2019-02-27').getTime(),
                new Date('2019-03-10').getTime()
              ],
              fillColor: '#775DD0'
            },
            {
              x: 'portal.demo',
              y: [
                new Date('2019-02-27').getTime(),
                new Date('2019-03-12').getTime()
              ],
              fillColor: '#FEB019'
            },
            {
              x: 'verato.demo',
              y: [
                new Date('2019-02-27').getTime(),
                new Date('2019-03-17').getTime()
              ],
              fillColor: '#FF4560'
            }
          ]
        }
      ],
      chart: {
        height: 230,
        type: 'rangeBar',
        toolbar:{
          show: true,
          tools:{
            pan: true,
            zoom: false,
            zoomin: false,
            zoomout: false
          }
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          distributed: true,
          barHeight: "50",
          dataLabels: {
            hideOverflowingLabels: false
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val, opts) {
          var label = opts.w.globals.labels[opts.dataPointIndex]
          // var a = moment(val[0])
          // var b = moment(val[1])
          // var diff = b.diff(a, 'days')
          return label;
        },
        style: {
          colors: ['#f3f4f5', '#fff']
        }
      },
      xaxis: {
        type: 'datetime',
        
      },
      yaxis: {
        show: false,
        reversed: true
      },
      grid: {
        row: {
          colors: ['#f3f4f5', '#fff'],
          opacity: 2
        }
      },
      title: {
        text: "TimeLine Chart Angular" 
      },
    };

    // series: [
    //   {
    //     name: "My-series",
    //     data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    //   }
    // ],
    // chart: {
    //   height: 350,
    //   type: "bar"
    // },
    // title: {
    //   text: "My First Angular Chart"
    // },
    // xaxis: {
    //   categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
    // }
  };


  ngOnInit(): void {
  }

}
