import { getList, readFromLS, writeToLS } from './ls.js';


class Todos {
    constructor(){
        todoList = getTodos();
        this.listTodos();
        this.getAllTasks();
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
    removeTodo(todo){
        const deleteTodo = todoList.indexOf(todo);
        delete todoList[deleteTodo];
        writeToLS(todoList);
    }

    //mark todo item as complete
    completeTodo(todo){

    }
    //Displays list by calling renderToDoList on each item
    listTodos(){
        this.clear();
        for (var i=0; i < todoList.length; i++){
            this.renderToDoList(todoList, i);
        }
    }
    //create the renderToDoList
    renderToDoList(list, index){
        document.getElementById("listbox").innerHTML +=
            `<div class="cell">
                <input type='checkbox'>
                <span class="todoText">`+ list[index].content + `</span>
                <button type='submit'>X</button>
            </div>`;

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



//takes a new todo, pushes onto the todoList and saves it to local storage
function saveTodo( newtodo,completionStatus){
    let t = { id: Date.now(), content: newtodo, completed: completionStatus};
    todoList.push(t);
    writeToLS(todoList);
}


//Returns todoList, if its empty, reads from local storage and then returns it
function getTodos(){
    if (todoList.length == 0){
        todoList = readFromLS();
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

export { Todos, saveTodo, getTodos, getAllTasks, getActiveTasks, getCompletedTasks };