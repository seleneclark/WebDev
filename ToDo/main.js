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
        completed: true
    },
    {
        id: '',
        content: 'Practice piano',
        completed: true
    
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
    
    let taskCount = todoList.filter(item => !item.completed).length;
    console.table(taskCount);

    document.getElementById("tasksLeft").innerHTML = taskCount;

}

function getCompletedTasks(){
    let taskCount = todoList.filter(item=>item.completed).length;
    console.table(taskCount);

    document.getElementById("tasksLeft").innerHTML = taskCount;
}
