'use strict';

function useUtilities(todos){

    //Add a new Todo item
    const form = document.getElementById('form');
    onTouch(form, newTodo, todos);

    //Access to the todo items
    const todoItem = document.getElementsByClassName('cell');

    //Remove item
    const removeItem = document.getElementsByTagName('span');
    for (let i = 0; i < todoItem.length; i++){
        todoItem[i].addEventListener('click', function(e){
            e.preventDefault();
            let removeItemText = removeItem[i].textContent;
            todos.removeTodo(removeItemText);
        }, false);
    };

    
    document.getElementById("completedTasksleft").addEventListener("mousedown", function(){
        todos.getCompletedTasks();
    });

    document.getElementById("activeTasksleft").addEventListener("mousedown",function(){
        todos.getActiveTasks();
    });

    document.getElementById("allTasksleft").addEventListener("mousedown",function(){
        todos.getAllTasks();
    });


   

  
    //Mark as completed
    //'check' is the checkbox input type
    // const complete = document.getElementsByClassName('check'); 
    // for (let i = 0; i < todoItem.length; i++){
    //     // complete[i].addEventListener('')
    // }

    

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