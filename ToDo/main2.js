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

/////////////////////////////////////////////////////////////////
// ToDo Class
////////////////////////////////////////////////////////////////
class Todos {
    constructor(todoList){
        //taking the array and saving in the todo class
        this.todoList = todoList;
        this.getAllTasks();
    }
    // Loads the original todo List to the page
    createList(){
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
    
    getAllTasks(){
        document.getElementById("tasksLeft").innerHTML = todoList.length;
    }
    getActiveTasks(){
        let taskCount = todoList.filter(item => !item.completed).length;
        document.getElementById("tasksLeft").innerHTML = taskCount;
    }
    getCompletedTasks(){
        let taskCount = todoList.filter(item=>item.completed).length;
        document.getElementById("tasksLeft").innerHTML = taskCount;
    }
    
}   

/////////////////////////////////////////////////////////////////
// Getting Setup on the page
////////////////////////////////////////////////////////////////


let todos = new Todos(todoList);
todos.createList();


/////////////////////////////////////////////////////////////////
// Utilities
////////////////////////////////////////////////////////////////
document.getElementById("allTasksleft").addEventListener("mousedown", todos.getAllTasks);
document.getElementById("activeTasksleft").addEventListener("mousedown", todos.getActiveTasks);
document.getElementById("completedTasksleft").addEventListener("mousedown", todos.getCompletedTasks);