// import {Graph} from './graph.js';
import {Polynomial} from './polynomial.js';

const points = [
    {x:-100, y:0},
    {x:-90,y:10},
    {x:-80, y:15},
    {x:-70,y:20},
    {x:-60, y:30},
    {x:-50,y:40},
    {x:-40, y:50},
    {x:-30,y:60},
    {x:-20, y:70},
    {x:-10,y:80},
    {x:0, y:70},
    {x:10,y:60},
    {x:20, y:50},
    {x:30,y:40},
    {x:40, y:30},
    {x:50,y:20},
    {x:60, y:10},
    {x:70,y:0},
    {x:80, y:10},
    {x:90,y:20},
    {x:100, y:30}
];

const polynomial = new Polynomial();
polynomial.makePoints();
polynomial.plotPolynomial();
