import React, {Component} from 'react';
import * as d3 from "d3";
import {select, csv, scaleLinear, scaleOrdinal, max, min, scaleBand, axisLeft, axisBottom, legend} from 'd3';
import './LineChart.css';
import { colorLegend } from './ColorLegend';

class LineChart extends Component {
   componentWillMount() {
      this.drawChart();
   }

   componentWillReiveProps(nextProps){
     this.datwChart();
   }

   drawChart(){
     let data = this.props.data;
     const circleRadius = 18;
     var margin = {top: 40, right: 20, bottom: 70, left: 100};
     let width = 1000 - margin.left - margin.right;
     let height = 700 - margin.top - margin.bottom;
     const innerWidth = width - margin.left - margin.right;
     const innerHeight = height - margin.top - margin.bottom;
      const yAxisLabel = 'IBU';
      const xAxisLabel = 'ABV(%)';

     //this determines the fill of the circles
     const categoryFill = arg => {
      if(arg === "North American Lager"){
        return 'red';
      } else if(arg === "North American Ales"){
        return 'yellow';
      } else if(arg === "North American Origin Ales"){
        return 'orange';
      }
       else if(arg === "Hybrid/mixed Beer"){
        return 'blue';
      } else if (arg === "Belgian And French Origin Ales"){
        return 'green';
      } else if (arg == "Malternative Beverages"){
        return "purple";
      } else{
        return 'black';
      }
     }

     const svg = d3.select("body").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      const colorScale = scaleOrdinal()
  .domain(['North American Lager', 'North American Ales', 'North American Origin Ales', 'Hybrid/mixed Beer', "Belgian And French Origin Ales", "Malternative Beverages", "Other"])
  .range(['red', 'yellow', 'orange', 'blue', 'green', 'purple', 'black']);

        const legend = svg.append('g')
       .attr('class', 'legend')
       .attr('transform', 'translate(0,0)').call(colorLegend, {
         colorScale,
         circleRadius: 5,
         spacing: 20,
         textOffset: 20,
       }).attr('transform', `translate(150,80)`)
      const g = svg.append('g')
      .attr('transform', `translate(180,150)`)
      .attr('transform', `translate(${margin.left}, ${margin.top})`)


      const xScale = scaleLinear()
              .domain([min(data, d => d.abv), max(data, d => d.abv)])
              .range([0, innerWidth])
      const yScale = scaleLinear()
            .domain([min(data, d=> d.ibu), max(data, d => d.ibu)])
            .range([innerHeight, 0])

      const yAxis = axisLeft(yScale);
      const xAxis = axisBottom(xScale);

    ////////Axis Labels///////////////////////////////////////
          const yAxisG = g.append('g').call(yAxis);
      yAxisG.selectAll('.domain').remove();

      yAxisG.append('text')
          .attr('class', 'axis-label')
          .attr('y', -40)
          .attr('x', -innerHeight / 2)
          .attr('fill', 'black')
          .attr('transform', `rotate(-90)`)
          .attr('text-anchor', 'middle')
          .text(yAxisLabel).style("font-size", "18px");

          const xAxisG = g.append('g').call(xAxis)
        .attr('transform', `translate(0,${innerHeight})`);

      xAxisG.select('.domain').remove();

      xAxisG.append('text')
          .attr('class', 'axis-label')
          .attr('y', 40)
          .attr('x', innerWidth / 2)
          .attr('fill', 'black')
          .text(xAxisLabel).style("font-size", "18px");;

////////////////////////////////////////////////////////////
      var div = d3.select("body").append("div").attr("class", "tooltip").style("opacity", 0);
      g.selectAll('circle').data(data)
          .enter().append('circle')
          .attr('cy', d=> yScale(d.ibu + Math.random() * 2))
          .attr('cx', d => xScale(d.abv+ Math.random() * .4))
          .attr("r", 5)
          .attr("fill", (d, index) => {
            // console.log(d.name, index, d.ibu, d.abv);
            return categoryFill(d.category);
          })
          .attr("opacity", .5)
          .on("mouseover", (d) => {
            div.transition()
                .duration(200)
                .style("opacity", .9);
            div.html((d.name) + "<br/>")
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
          })
          yAxis(g.append('g'));
          xAxis(g.append('g').attr('transform', `translate(0, ${innerHeight})`))

  }

   render() {
    return <div></div>;
  }
}
export default LineChart;
