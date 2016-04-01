import d3 from 'd3'
import request from 'superagent'

const w = 700
const h = 300

const monthlySales = [
  {"month": 10, "sales": 200},
  {"month": 20, "sales": 140},
  {"month": 30, "sales": 200},
  {"month": 40, "sales": 130},
  {"month": 50, "sales": 125},
  {"month": 60, "sales": 220},
  {"month": 70, "sales": 90},
  {"month": 80, "sales": 60},
  {"month": 90, "sales": 130},
  {"month": 100, "sales": 70}
]

//KPI
function salesKPI(d) {
  if (d >= 250) {
    return "@"
  }
}


const svg = d3.select('body').append('svg').attr({
  width: w,
  height: h
})

const dots = svg.selectAll('circle')
                .data(monthlySales)
                .enter()
                .append('circle')
                .attr({
                  cx: d => d.month * 3,
                  cy: d => h - d.sales,
                  r: 5,
                  'fill': "#666666"
                })
//

//
// const lineFun = d3.svg.line()
//                   .x(d => d.month*5)
//                   .y(d => h - d.sales)
//                   .interpolate('basis')
//
// const svg = d3.select('body').append('svg').attr({
//   width: w, height:h
// })
// const viz = svg.append('path')
//               .attr({
//                 d: lineFun(monthlySales),
//                 "stroke": "purple",
//                 "stroke-width": 2,
//                 "fill": "none"
//               })
//
//
// const labels = svg.selectAll('text')
//                 .data(monthlySales)
//                 .enter()
//                 .append('text')
//                 .text(d => d.sales)
//                 .attr({
//                   x: d => d.month * 5,
//                   y: d => h - d.sales,
//                   'font-size': '12px',
//                   'font-family': 'sans-serif',
//                   'fill': '#666666',
//                   'text-anchor': 'end',
//                   'dy': '.35em',
//                   'font-weight': (d, i) => {
//                     if (i === 0 || i === (monthlySales.length-1)) {
//                       return 'bold'
//                     } else {
//                       return 'normal'
//                     }
//                   }
//                 })

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
