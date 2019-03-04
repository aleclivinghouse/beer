import React, {Component} from 'react';
import * as d3 from "d3";
import {select, csv, scaleLinear, max, min, scaleBand, axisLeft, axisBottom} from 'd3';
import './LineChart.css';

class LineChart extends Component {
   componentWillMount() {
      this.drawChart();
   }

   drawChart(){
     let data = this.props.data;
     console.log('thi is the data in d3');
     console.log(data);
     const circleRadius = 18;
     var margin = {top: 20, right: 20, bottom: 70, left: 100};
     let width = 800 - margin.left - margin.right;
     let height = 400 - margin.top - margin.bottom;
     const innerWidth = width - margin.left - margin.right;
     const innerHeight = height - margin.top - margin.bottom;
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

      const g = svg.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)

      const xScale = scaleLinear()
              .domain([min(data, d => d.abv), max(data, d => d.abv)])
              .range([0, innerWidth])
      const yScale = scaleLinear()
            .domain([min(data, d=> d.ibu), max(data, d => d.ibu)])
            .range([innerHeight, 0])

      const yAxis = axisLeft(yScale);
      const xAxis = axisBottom(xScale);
      var div = d3.select("body").append("div").attr("class", "tooltip").style("opacity", 0);
      g.selectAll('circle').data(data)
          .enter().append('circle')
          .attr('cy', d=> yScale(d.ibu))
          .attr('cx', d => xScale(d.abv))
          .attr("r", 5)
          .attr("fill", (d) => {
            return categoryFill(d.category)
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
    return <div></div>
  }
}
export default LineChart;
