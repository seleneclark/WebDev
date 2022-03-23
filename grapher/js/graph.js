export class Graph {
    constructor(points){
        console.log('graph');
        this.points = points.map(shiftPoints);
        drawGrid();
        gridlines();
    }
    
    
    drawGraph(){
        const c = document.getElementById("graphCanvas");
        const graph = c.getContext("2d");
        graph.beginPath();
        graph.lineWidth = 1;
        graph.strokeStyle = '#400080';
        graph.moveTo(this.points[0].x, this.points[0].y);
        for (let i = 1; i < this.points.length; i++){
            graph.lineTo(this.points[i].x, this.points[i].y);
        }
        graph.stroke();
    }
}


function drawGrid () {
    const c = document.getElementById("graphCanvas");
    const context = c.getContext("2d");
    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = '#132639';
    context.moveTo(0, 75);
    context.lineTo(300, 75);
    context.stroke();

    context.beginPath();
    context.lineWidth = 4;

    context.moveTo(150, 0);
    context.lineTo(150, 150);
    context.stroke();
}
// converts regular polynomial points to fit on the canvas grid
function shiftPoints(value, index, array){
    value.x = value.x + 150;
    value.y = (value.y * -1) + 75;
    return value;
}

function gridlines(){
    
    const c = document.getElementById("graphCanvas");
    const context = c.getContext("2d");
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = '#132639';
    for (let x = 0; x < 300; ){
        context.beginPath();
        context.moveTo(x, 72);
        context.lineTo(x, 78);
        context.stroke();
        x = x+ 20;
    }
    for (let y = 0; y < 150; y = y+10){
        context.beginPath();
        context.moveTo(144, y);
        context.lineTo(156, y);
        context.stroke();
    }
    
}
