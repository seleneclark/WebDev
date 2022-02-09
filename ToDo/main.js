'use strict';

import {Todos, saveTodo} from './modules/Todos.js';
// import {all, active, complete} from './modules/utilities.js';

const todoListStart = [
    {
        id: '',
        content: 'Grocery Shopping',
        completed: false
    },
    {
        id: '',
        content: 'Pick up Dog',
        completed: false
    },
    {
        id: '',
        content: 'Bake a cake',
        completed: true
    },
    {
        id: '',
        content: 'Finish homework',
        completed: true
    },
    {
        id: '',
        content: 'Practice piano',
        completed: true
    
    }
]

/////////////////////////////////////////////////////////////////
// Getting Setup on the page
////////////////////////////////////////////////////////////////
let todos = new Todos(todoListStart);
saveTodo( "Knit a Sweater", true);
todos.createList();