import { getList, readFromLS, writeToLS } from './ls.js';
// import { useUtilities } from './modules/utilities.js';


class Todos {
    constructor(){
        //taking the array and saving in the todo class
        todoList = getList();
        this.createList();
        getAllTasks();
    }
    clear(){
        document.getElementById("listbox").innerHTML = '';
    }
    //my function
    createList(){
        this.clear();
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
    //Complete Todos.addTodo

}   

function saveTodo( newtodo,completionStatus){
    // this should be saving it to local storage which I do NOT know how to do
    let t = { id: Date.now(), content: newtodo, completed: completionStatus};
    todoList.push(t);
    writeToLS(todoList);
}

//create the renderToDoList
function renderToDoList(list, index){
    document.getElementById("listbox").innerHTML +=
            `<div class="cell">
                <input type='checkbox'>
                <span class="todoText">`+ list[index].content + `</span>
                <button type='submit'>X</button>
            </div>`;

}
//Returns todoList, if its empty(null), reads from local storage and then returns it
function getTodos(){
    if (todoList == null){
        todoList = readFromLS();
    }
    return todoList;
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


let todoList = [];

export { Todos, saveTodo, getTodos, getAllTasks, getActiveTasks, getCompletedTasks };