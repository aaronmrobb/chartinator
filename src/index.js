import d3 from 'd3'
import request from 'superagent'

const w = 300
const h = 100
const padding = 2
const dataSet = [5, 10, 14, 20, 25]
const svg = d3.select('body').append('svg')
                .attr('width', w)
                .attr('height', h)

svg.selectAll('rect')
  .data(dataSet)
  .enter()
  .append('rect')
    .attr({x: (d, i) =>  i * (w / dataSet.length),
          y: d => h - (d * 4),
          width: w / dataSet.length - padding,
          height: (d) => d * 4,
          fill: (d) => 'rgb(' + (d * 10) + ", 0, 0)"
        })

    // .attr('y',
    // .attr('width', w / dataSet.length - padding)
    // .attr('height', function(d) {
    //   return d * 4
    // })
    // .attr('fill', function(d) {
    //   return '
    // })

//Multivalue Map
