import {Polynomial} from './polynomial.js';


// temporary polynomial  [-10,0,5,1,2,2];
let expression = "1x^2+5x-10";

const polynomial = new Polynomial(expression);
polynomial.generatePointArray();
polynomial.plotPolynomial();
