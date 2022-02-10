'use strict';

import {Todos, saveTodo} from './modules/Todos.js';
import { useUtilities } from './modules/utilities.js';




let todos = new Todos();
saveTodo( "Knit a Sweater", true);
todos.createList();

useUtilities();



// const all = document.getElementById("allTasksleft").addEventListener("mousedown", todos.getAllTasks);
// const active = document.getElementById("activeTasksleft").addEventListener("mousedown", todos.getActiveTasks);
// const complete = document.getElementById("completedTasksleft").addEventListener("mousedown", todos.getCompletedTasks);