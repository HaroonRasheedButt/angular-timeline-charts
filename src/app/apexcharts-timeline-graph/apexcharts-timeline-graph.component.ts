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
  ApexGrid,
  ApexMarkers,
  ApexLegend
} from "ng-apexcharts";
import { TimeLineData } from './data-model';

export type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  // markers: ApexMarkers;
  legend: ApexLegend;
};
@Component({
  selector: 'app-apexcharts-timeline-graph',
  templateUrl: './apexcharts-timeline-graph.component.html',
  styleUrls: ['./apexcharts-timeline-graph.component.css']
})
export class ApexchartsTimelineGraphComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: ChartOptions;
  private timelineData!: TimeLineData[];
  constructor() {

    this.chartOptions = {
      series: [
        {
          data: [
            {
              x: 'leads.demo',
              y: [
                new Date('2019-02-25').getTime(), // start date
                new Date('2019-03-04').getTime() // end date
              ],
              fillColor: '#008FFB',
              goals: [
                {
                  name: 'marker',
                  value: new Date('2019-03-04').getTime(), // end date
                  strokeWidth: 15,
                  strokeHeight: 0,
                  strokeLineCap: 'round',
                  strokeColor: '#198be2'
                }]
            },
            {
              x: 'salesforce.demo',
              y: [
                new Date('2019-02-27').getTime(),
                new Date('2019-03-08').getTime()
              ],
              fillColor: '#00E396',
              goals: [
                {
                  name: 'marker',
                  value: new Date('2019-03-08').getTime(),
                  strokeWidth: 15,
                  strokeHeight: 0,
                  strokeLineCap: 'round',
                  strokeColor: '#00b678'
                }]
            },
            {
              x: 'egr.demo',
              y: [
                new Date('2019-02-27').getTime(),
                new Date('2019-03-10').getTime()
              ],
              fillColor: '#775DD0',
              goals: [
                {
                  name: 'marker',
                  value: new Date('2019-03-10').getTime(),
                  strokeWidth: 15,
                  strokeHeight: 0,
                  strokeLineCap: 'round',
                  strokeColor: '#5436bb'
                }]
            },
            {
              x: 'portal.demo',
              y: [
                new Date('2019-02-27').getTime(),
                new Date('2019-03-12').getTime()
              ],
              fillColor: '#FEB019',
              goals: [
                {
                  name: 'marker',
                  value: new Date('2019-03-12').getTime(),
                  strokeWidth: 15,
                  strokeHeight: 0,
                  strokeLineCap: 'round',
                  strokeColor: '#de9301',
                }]
            },
            {
              x: 'verato.demo',
              y: [
                new Date('2019-02-27').getTime(),
                new Date('2019-03-17').getTime()
              ],
              fillColor: '#FF4560',
              goals: [
                {
                  name: 'marker',
                  value: new Date('2019-03-17').getTime(),
                  strokeWidth: 15,
                  strokeHeight: 0,
                  strokeLineCap: 'round',
                  strokeColor: '#ff0429'
                }]
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
            zoomout: false,
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
          },
          colors:{
            backgroundBarOpacity: 0.5
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
        type: 'datetime'
      },
      yaxis: {
        show: false,
        reversed: true,
        opposite: true,
        axisTicks: {
          show: true
        }
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
      // markers:{
      //   shape: "circle",
      //   size: 7,
      //   radius: 5,
      //   discrete: [{
      //     seriesIndex: 0,
      //     // For dataPointIndex: 0 there is no discrete marker at all!
      //     dataPointIndex: 1,
          
      //     // Also docs says its "fill" and "stroke", but "fillColor" and "strokeColor" are working
      //     fillColor: "#0A0",
      //     strokeColor: "#FFF",
      //     size: 7,
      //     shape: "circle"
      //   }
      //   ]
      // }
      legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ['salesforce.demo', 'egr.demo'],
        markers: {
          fillColors: ['#00E396', '#775DD0']
        }
      }
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
