export class Graph {
    constructor(points){
        this.points = points.map(shiftPoints);
        drawGrid();
        gridlines();
    }
    
    drawGraph(){
        const c = document.getElementById("graphCanvas");
        const graph = c.getContext("2d");
        graph.beginPath();
        graph.lineWidth = 2;
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
    context.clearRect(0,0,400,400);
    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = '#132639';
    context.moveTo(0, 200);
    context.lineTo(400, 200);
    context.stroke();

    context.beginPath();
    context.lineWidth = 2;

    context.moveTo(200, 0);
    context.lineTo(200, 400);
    context.stroke();
}
// converts regular polynomial points to fit on the canvas grid
function shiftPoints(value, index, array){
    value.x = value.x + 200;
    value.y = (value.y * -1) + 200;
    return value;
}

function gridlines(){
    const c = document.getElementById("graphCanvas");
    const context = c.getContext("2d");
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = '#132639';
    for (let pos = 0; pos < 400; ){
        context.strokeStyle = '#132639';
        //x-axis
        context.beginPath();
        context.moveTo(pos, 197);
        context.lineTo(pos, 203);
        context.stroke();
        //y-axis
        context.beginPath();
        context.moveTo(197, pos);
        context.lineTo(203, pos);
        context.stroke();
        //grid numbers
        if (pos%20 == 0){
            context.fillStyle = 'lightgray';
            context.font = '8px "Microsoft YaHei ';
            context.fillText(pos-200, pos, 195);
            context.fillText(-1*(pos-200), 205, pos);
        }
        pos = pos+ 10;
    } 
}
