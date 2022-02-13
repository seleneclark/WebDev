'use strict';

function useUtilities(todos){

    //Add a new Todo item
    const form = document.getElementById('form');
    onTouch(form, newTodo, todos);

    //Access to the todo items
    const todoItem = document.getElementsByClassName('cell');

    //Remove item
    // const removeItem = document.getElementsByClassName('remove');


    const removeItem = document.getElementsByTagName('span');
    
    for (let i = 0; i < todoItem.length; i++){
        //remove item
        todoItem[i].addEventListener('click', function(e){
            
            console.log('trying to remove');
            e.preventDefault();
            let removeItemText = removeItem[i].textContent;
            todos.removeTodo(removeItemText);
        }, false);
        
    };
   
    const markCompletedList = document.getElementsByClassName('check');
    for (let i = 0; i < markCompletedList.length; i++){
        markCompletedList[i].addEventListener('change', function(e){
            console.log('trying to mark as complete');
            todos.completeTodo(i);

        }, false);
    }


    document.getElementById("completedTasksleft").addEventListener("mousedown", function(){
        todos.getCompletedTasks();
    });

    document.getElementById("activeTasksleft").addEventListener("mousedown",function(){
        todos.getActiveTasks();
    });

    document.getElementById("allTasksleft").addEventListener("mousedown",function(){
        todos.getAllTasks();
    });


}


//touchend eventlistener for mobile  (click eventlistener fallback option for desktops)
function onTouch(elementSelector, callback, todos){
    elementSelector.addEventListener('submit', function(e){ callback(e, todos);});
}
function newTodo(e, todos){
    e.preventDefault();
    const newTodo = e.target;
    const todo = newTodo.addNewTodo.value;
    todos.addTodo(todo);
    form.reset();
};

//Couldn't get this way of deleting working
function deleteTodo(e,todos){
    const removeItem = document.getElementsByTagName('span');
    e.preventDefault();
    let removeItemText = removeItem[i].textContent;
    todos.removeTodo(removeItemText);
};

//queryselector lookup
function querySelector(elementSelector){
    let selector = '';
    //selector - the selector passed to querySelector
    console.log('got to utilities');
    //return {element} matching element or null if not found
    
};

export { useUtilities };