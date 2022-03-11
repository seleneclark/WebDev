var c = document.getElementById("graphCanvas");
var context = c.getContext("2d");
context.strokeStyle = '#0c0';

context.moveTo(0, 75);
context.lineTo(300, 75);
context.moveTo(150, 0);
context.lineTo(150, 150);
context.stroke();

// context.lineWidth = 4;
var d = document.getElementById("graphCanvas");

var graph = d.getContext("2d");
graph.strokeStyle = '#c00';

graph.moveTo(0, 150);
graph.lineTo(5, 145);
graph.lineTo(10, 146);
graph.lineTo(20, 145);
graph.lineTo(30, 144);
graph.lineTo(40, 143);
graph.lineTo(50, 141);
graph.lineTo(60, 138);

graph.stroke();