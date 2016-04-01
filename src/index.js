import d3 from 'd3'
import request from 'superagent'

const w = 300
const h = 150

const svg = d3.select('body').append('svg')
// const padding = 2
// const dataSet = [5, 10, 14, 20, 25, 2, 23, 12, 7]
// const svg = d3.select('body').append('svg')
//                 .attr('width', w)
//                 .attr('height', h)
//
// function colorPicker(v) {
//   if (v <= 20) {
//     return '#666666'
//   } else {
//     return '#FF0033'
//   }
// }
//
// svg.selectAll('rect')
//   .data(dataSet)
//   .enter()
//   .append('rect')
//     .attr({x: (d, i) =>  i * (w / dataSet.length),
//           y: d => h - (d * 4),
//           width: w / dataSet.length - padding,
//           height: d => d * 4,
//           fill: d => colorPicker(d)
//         })
//
// svg.selectAll('text')
//     .data(dataSet)
//     .enter()
//     .append('text')
//     .text(d => d)
//     .attr({
//       "text-anchor": "middle",
//       x: (d, i) => i * (w / dataSet.length) + (w / dataSet.length - padding)  / 2,
//       y: d => h - (d * 4) + 14,
//       fill: 'white',
//       'font-family': 'sans-serif'
//     })
//
//
