'use strict';

import {Todos, saveTodo} from './modules/Todos.js';

// import {all, active, complete} from './modules/utilities.js';


let todos = new Todos();
saveTodo( "Knit a Sweater", true);
todos.createList();
