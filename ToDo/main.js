'use strict'

const todoList = [
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
        completed: false
    },
    {
        id: '',
        content: 'Finish homework',
        completed: false
    }
]
// Loads the original todo List
for (var i=0; i < todoList.length; i++){
    document.getElementsByClassName("todoText")[i].innerHTML = todoList[i].content;
}
document.getElementById("tasksLeft").innerHTML = todoList.length;

function getAllTasks(){
    document.getElementById("tasksLeft").innerHTML = todoList.length;

}

function getActiveTasks(){
    document.getElementById("tasksLeft").innerHTML = 2;

}

function getCompletedTasks(){
    document.getElementById("tasksLeft").innerHTML = 1;

}
