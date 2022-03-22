import {Graph} from './graph.js';

export class Polynomial {
    constructor(expression){
        console.log("polynomial");
        // readExpression(expression);
        this.points = [];
        // this.polynomial = [-40,0,5,1,2,2];
        this.polynomial = readExpression(expression);
    }

    generatePointArray(){
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

function readExpression(expression){
    // let pattern = new RegExp('[+-]?[^-+]+');
    let arr = [];
    expression = expression.match(/[+-]?\d*(x|y)(\^\d)*((y|x)(\^\d)*)*|[+-\s]\d+/g);
    expression.forEach(function (match) {
        let variable = match.match(/([a-z]\^\d|[a-z])/gi) ? match.match(/([a-z]\^\d|[a-z])/gi).join("") : " ";
        let coeff = parseFloat(match.split(variable)[0]);
        let power = 1;
        let variables = [];
        if (variable != " ") {
            // let tempVars = variable.match(/([a-z]\^\d|[a-z])/gi);
            let tempVars = variable.match(/(x\^\d|x)/gi);

            for (let i = 0; i < tempVars.length; i++) {
                let oneVariable = { variable: "", power: 0 };
                //next line
                power = 0;
                oneVariable.variable = tempVars[i].match(/x/gi)[0];
                let tempV = tempVars[i].split("^");
                if (tempV.length > 1) {
                    // oneVariable.power = parseFloat(tempV[1]);
                    power = parseFloat(tempV[1]);
                }
                else {
                    // oneVariable.power = 1;
                    power = 1;
                }
                // variables.push(oneVariable);
                // variables.push(power);

            }
        }
        else {
            // variables.push({ variable: "", power: 0 });
            power = 0;
        }
        // arr.push({
        //     coeff: coeff,
        //     // variables: variables
        //     variables: power
        // });
        arr.push(coeff);
        arr.push(power);
           
    });
    console.log(arr);

    
    return arr;


}