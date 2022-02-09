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
// Loads the original todo List to the page
function createList(){
    for (var i=0; i < todoList.length; i++){
        const text = todoList[i].content;
        document.getElementById("listbox").innerHTML +=
            `<div class="cell">
            <input type='checkbox'>
            <span class="todoText">`+ text + `</span>
            <button type='submit'>X</button>
            </div>`;
    }
}  
function getAllTasks(){
    document.getElementById("tasksLeft").innerHTML = todoList.length;
}
function getActiveTasks(){
    let taskCount = todoList.filter(item => !item.completed).length;
    document.getElementById("tasksLeft").innerHTML = taskCount;
}
function getCompletedTasks(){
    let taskCount = todoList.filter(item=>item.completed).length;
    document.getElementById("tasksLeft").innerHTML = taskCount;
}

        
/////////////////////////////////////////////////////////////////
// Getting Setup on the page
////////////////////////////////////////////////////////////////
createList();
getAllTasks();

document.getElementById("allTasksleft").addEventListener("mousedown", getAllTasks);
document.getElementById("activeTasksleft").addEventListener("mousedown", getActiveTasks);
document.getElementById("completedTasksleft").addEventListener("mousedown", getCompletedTasks);
