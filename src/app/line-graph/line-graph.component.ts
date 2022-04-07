import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.css']
})
export class LineGraphComponent implements OnInit {

  private data = [
    { "Country": "United States", "Value": "12394" },
    { "Country": "Russia", "Value": "6148" },
    { "Country": "Germany", "Value": "1653" },
    { "Country": "France", "Value": "2162" },
    { "Country": "United Kingdom", "Value": "1214" },
    { "Country": "China", "Value": "1131" },
    { "Country": "Spain", "Value": "814" },
    { "Country": "Netherlands", "Value": "1167" },
    { "Country": "Italy", "Value": "660" },
    { "Country": "Israel", "Value": "1263" },

  ]
  private svg: any;
  private margin = { top: 10, right: 30, bottom: 40, left: 100 };
  private width = 460 - this.margin.left - this.margin.right;
  private height = 500 - this.margin.top - this.margin.bottom;

  constructor() { }

  ngOnInit(): void {

    // append the svg object to the body of the page

    this.svg = d3.select("#my_dataviz")
      .append("svg")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + this.margin.left + "," + this.margin.top + ")");

 // // Parse the Data
 // d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv").then(function(data) {

 // Add X axis
 const x = d3.scaleLinear()
    .domain([0, 13000])
    .range([0, this.width]);
   this.svg.append("g")
  .attr("transform", "translate(0," + this.height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
  .attr("transform", "translate(-10,0)rotate(-45)")
  .style("text-anchor", "end");

// Y axis
const y = d3.scaleBand()
  .range([0, this.height])
  .domain(this.data.map(d => d['Country']))
  .padding(1);
this.svg.append("g")
  .call(d3.axisLeft(y))


// Lines
this.svg.selectAll("myline")
  .data(this.data)
  .enter()
  .append("line")
  .attr("x1", function (d: { Value: d3.NumberValue; }) { return x(d.Value); })
  .attr("x2", x(0))
  .attr("y1", function (d: { Country: string; }) { return y(d.Country); })
  .attr("y2", function (d: { Country: string; }) { return y(d.Country); })
  .attr("stroke", "grey")

// Circles
this.svg.selectAll("mycircle")
  .data(this.data)
  .enter()
  .append("circle")
  .attr("cx", function (d: { Value: d3.NumberValue; }) { return x(d.Value); })
  .attr("cy", function (d: { Country: string; }) { return y(d.Country); })
  .attr("r", "4")
  .style("fill", "#69b3a2")
  .attr("stroke", "red")
 
  }
}
  // set the dimensions and margins of the graph
