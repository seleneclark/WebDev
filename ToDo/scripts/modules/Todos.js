'use strict';
import {  readFromLS, writeToLS } from './ls.js';

class Todos {
    constructor(){
        todoList = getTodos();
        this.listTodos();
    }
    clear(){
        document.getElementById("listbox").innerHTML = '';
    }

    //gets the new todo, sends it to save and updates the display
    addTodo(newtodo){
        saveTodo(newtodo, false);
        this.listTodos();
    }

    //remove a todo item
    removeTodo(todoText){
        const index = todoList.findIndex((element, index) => {
            if (element.content === todoText){
                return true;
            }
        });
        todoList.splice(index, 1);

        writeToLS(todoList);
        this.listTodos();
    }

    //mark todo item as complete
    completeTodo(todo){
        const todoIndex = todoList.indexOf(todo);
        todoList[todoIndex].completed = true;
    }
    //Displays list by calling renderToDoList on each item
    listTodos(){
        this.clear();
        if (todoList != 0){
            for (var i=0; i < todoList.length; i++){
                this.renderToDoList(todoList, i);
            }
        }
        this.getAllTasks();
    }
    //create the renderToDoList
    renderToDoList(list, index){
        if (list[index].completed){ //when completed == true
            document.getElementById("listbox").innerHTML +=
            `<div class="cell">
                <input type='checkbox' name='check'>
                <span class='todoTextComplete'>`+ list[index].content + `</span>
                <button type='submit' name='remove'>X</button>
            </div>`;
        } else {// when todo is not completed
            document.getElementById("listbox").innerHTML +=
            `<div class="cell">
                <input type='checkbox' name='check'>
                <span class='todoText'>`+ list[index].content + `</span>
                <button type='submit' name='remove'>X</button>
            </div>`;
        }
        

    }
    getAllTasks(){
        if (todoList != 0){
            document.getElementById("tasksLeft").innerHTML = todoList.length;
        }
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



//takes a new todo, pushes onto the todoList and saves it to local storage
function saveTodo( newtodo,completionStatus){
    let t = { id: Date.now(), content: newtodo, completed: completionStatus};
    todoList.push(t);
    writeToLS(todoList);
}


//Returns todoList, if its empty, reads from local storage and then returns it
function getTodos(){
    if (todoList.length == 0){
        let length = readFromLS().length;
        if (length != 0){
            todoList = readFromLS();
        }
    }
    return todoList;
}
// Returns how many tasks are left for all, active and completed
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


let todoList = [];

export { Todos };