


export class Graph {
    constructor(points){
        console.log('constructor');
        this.points = points.map(convertPoints);
        drawGrid();
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
function convertPoints(value, index, array){
    value.x = value.x + 150;
    value.y = (value.y * -1) + 75;
    return value;
}

// drawGrid();
// const gridPoints = points.map(convertPoints);
// drawGraph();