import {Graph} from './graph.js';

export class Polynomial {
    constructor(){
        console.log("polynomial");
        this.points = [];
        this.polynomial = [40,0,.75,1,-.03,2];
    }

    makePoints(){
        console.log("makepoints");
        for (let x = -100; x <= 100; x++){
            let y = 0;
            for ( let i = 0; i < this.polynomial.length; i++){
                let coefficient = 0;
                coefficient += this.polynomial[i];
                y += coefficient * ((x) ** this.polynomial[++i]);
            }
            let point = [];
            point.x = x;
            point.y = y;
            this.points.push(point);
        }
    }

    plotPolynomial(){
        const graph = new Graph(this.points);
        graph.drawGraph();
    }

}