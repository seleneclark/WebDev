import {Polynomial} from './polynomial.js';


// temporary polynomial  [-10,0,5,1,2,2];
let expression = "1/10x^2+2x-30";

const polynomial = new Polynomial(expression);
polynomial.generatePointArray();
polynomial.plotPolynomial();
