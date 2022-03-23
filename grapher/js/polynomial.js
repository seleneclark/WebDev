import {Graph} from './graph.js';

export class Polynomial {
    constructor(expression){
        console.log("polynomial");
        this.points = [];
        // this.polynomial = [-40,0,5,1,2,2];
        this.polynomial = readExpression(expression);
    }

    generatePointArray(){
        for (let x = -150; x <= 150; x++){
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

function readExpression(expression){
    let arr = [];
    expression = expression.match(/[+-]?(\d\/)?\d*x(\^\d)*(x(\^\d)*)*|[+-\s]\d+/g);

    expression.forEach(function (match) {
        let variable = match.match(/(x\^\d|x)/gi) ? match.match(/(x\^\d|x)/gi).join("") : " ";
        
        // Find the coefficient for each term and if its a fraction, make it a decimal
        let coeff = match.split(variable)[0];
        let fractionTest = /\//;
        if (fractionTest.test(coeff)){
            let fractionParts = coeff.split('/');
            let numerator = parseFloat(fractionParts[0]);
            let denominator = parseFloat(fractionParts[1]);
            coeff = numerator/denominator;
        } else {
            coeff = parseFloat(coeff);
        }
        //coeff is 1 when there is no number as the coefficient
        if (isNaN(coeff)){
            coeff = 1;
        }

        //Find the power for each term
        let power = 0;
        if (variable != " ") {
            let tempVars = variable.match(/(x\^\d|x)/gi);

            for (let i = 0; i < tempVars.length; i++) {
                let tempV = tempVars[i].split("^");
                if (tempV.length > 1) {
                    power = parseFloat(tempV[1]);
                }
                else {
                    power = 1;
                }
            }
        }
        // else {
        //     power = 0;
        // }
        arr.push(coeff);
        arr.push(power);
           
    });
    console.log(arr);
    return arr;
}