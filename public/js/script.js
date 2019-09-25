$("#submitButton").on("click", function(event) {
  event.preventDefault();
  console.log($("input[value='logNewTask']:checked").val());
  if ($("input[value='logNewTask']:checked").val()) {
    $("#myNewModal").modal("toggle");
  } else if ($("input[value='logExistingTask']:checked").val()) {
    $("#myExistingModal").modal("toggle");
  }
});
$.get("/api/data", function(data) {
  
    
var svgWidth = 500, svgHeight = 300, radius = Math.min(svgWidth, svgHeight) / 2;
var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);


var g = svg.append("g")
    .attr("transform", "translate(" + radius + "," + radius + ")");

var color = d3.scaleOrdinal(d3.schemeCategory10);

var pie = d3.pie().value(function(d) {
    return d.hour;
});

var path = d3.arc()
    .outerRadius(radius)
    .innerRadius(0);

var arc = g.selectAll("arc")
    .data(pie(data))
    .enter()
    .append("g");

arc.append("path")
    .attr("d", path)
    .transition().delay(function(d,i) {
        return i * 500; }).duration(500)
    .attr("fill", function(d) { 
        return color(d.data.hourName);
     });

var label = d3.arc()
     .outerRadius(radius)
     .innerRadius(0);

arc.append("text")
     .attr("transform", function(d) {
         return "translate(" + label.centroid(d) + ")";
     })
     .attr("text-anchor", "middle")
     .transition()
	 .delay(500)
     .text(function(d) {
         return d.data.hourName + ":" + d.data.projectName + "%";
     });


    })
  