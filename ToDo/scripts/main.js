'use strict';

import {Todos, saveTodo, getTodos, getAllTasks, getActiveTasks, getCompletedTasks } from './modules/Todos.js';
import { useUtilities } from './modules/utilities.js';




let todos = new Todos();
// todos.removeTodo("anything");
//activates the listeners
useUtilities(todos);





//this whole thing needs to be moved to the utilities
const form = document.getElementById('form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const newTodo = e.target;
    const todo = newTodo.addNewTodo.value;
    todos.addTodo(todo);
    
});

//Access to the todo items
const todoItem = document.getElementsByClassName('cell');

//Remove item
const removeItem = document.getElementsByTagName('span');
for (let i = 0; i < todoItem.length; i++){
    todoItem[i].addEventListener('click', function(e){
        e.preventDefault();
        let removeItemText = removeItem[i].textContent;
        todos.removeTodo(removeItemText);
    }, false);
};

//Mark as completed
//'check' is the checkbox input type
const complete = document.getElementsByClassName('check'); 
for (let i = 0; i < todoItem.length; i++){
    // complete[i].addEventListener('')
}

// const thisiswherethelistis = document.getElementById('listBox');
// console.log(thisiswherethelistis.che)
// const goThruList = document.getElementsByClassName('cell');
// console.log(goThruList[0]);
//now I've found the form for the list
//I need to access the checkboxes and call the complete function when the checkbox is selected
//also mark as not complete when checkbox is de-selected






// const all = document.getElementById("allTasksleft").addEventListener("mousedown", todos.getAllTasks);
// const active = document.getElementById("activeTasksleft").addEventListener("mousedown", todos.getActiveTasks);
// const complete = document.getElementById("completedTasksleft").addEventListener("mousedown", todos.getCompletedTasks);