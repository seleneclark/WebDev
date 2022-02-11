'use strict';

import {Todos, saveTodo, getTodos, getAllTasks, getActiveTasks, getCompletedTasks } from './modules/Todos.js';
import { useUtilities } from './modules/utilities.js';




let todos = new Todos();
// todos.addTodo( "Knit a Sweater");
// todos.listTodos();
// getTodos();

//activates the listeners
useUtilities(todos);





//this whole thing needs to be moved to the utilities
const form = document.getElementById('form')
form.addEventListener('submit', function(e){
    e.preventDefault();
    const newTodo = e.target;
    const todo = newTodo.addNewTodo.value;
    todos.addTodo(todo);

});

// const all = document.getElementById("allTasksleft").addEventListener("mousedown", todos.getAllTasks);
// const active = document.getElementById("activeTasksleft").addEventListener("mousedown", todos.getActiveTasks);
// const complete = document.getElementById("completedTasksleft").addEventListener("mousedown", todos.getCompletedTasks);