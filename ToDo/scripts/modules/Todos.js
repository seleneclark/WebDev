import { getList } from './ls.js';


class Todos {
    constructor(){
        //taking the array and saving in the todo class
        todoList = getList();
        this.createList();
        this.getAllTasks();
    }
    clear(){
        document.getElementById("listbox").innerHTML = '';
    }
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
}   

function saveTodo( newtodo,completionStatus){
    let t = { id: Date.now(), content: newtodo, completed: completionStatus};
    todoList.push(t);
    // todos.createList();
}


let todoList = [];

export { Todos, saveTodo };