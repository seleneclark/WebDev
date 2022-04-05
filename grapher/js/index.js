import {Polynomial} from './polynomial.js';
import {readFromLS, writeToLS} from './storage.js';

window.addEventListener("load", function(){ loadPage() });

let graph = document.getElementById("graphButton");
graph.addEventListener("click", function(){ graphPolynomial()});

function graphPolynomial(){
    let expression = document.getElementById("expression").value;
    const polynomial = new Polynomial(expression);
    polynomial.generatePointArray();
    polynomial.plotPolynomial();
    writeToLS(expression);
}

function loadPage(){
    let lastExpression = readFromLS();
    if (lastExpression !== null){
        document.getElementById("expression").value = lastExpression;
        graphPolynomial();
    }
}
