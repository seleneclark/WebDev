'use strict'

const todoList = [
    {
        task: 'Grocery Shopping',
        status: 'active'
    },
    {
        task: 'Pick up Dog',
        status: 'active'
    },
    {
        task: 'Bake a cake',
        status: 'active'
    },
    {
        task: 'Finish homework',
        status: 'active'
    }
]
// Loads the original todo List
for (var i=0; i < todoList.length; i++){
    document.getElementsByClassName("todoText")[i].innerHTML = todoList[i].task;
}

document.getElementById("tasksLeft").innerHTML = todoList.length;
document.getElementById("tasksLeft").innerHTML = todoList.length;
