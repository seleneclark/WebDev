'use strict';

// Reads JSON ToDo list from localStorage returns to TODOS.js using key "savedList"
function readFromLS() {
    let listString = localStorage.getItem("savedList");
    console.log(listString);
    if (listString !== null){
        return JSON.parse(listString);
    }
    else {
        let array = [];
        return array;
    }
    

}
//Saves Todo List in Local Storage under the key name "savedList"
function writeToLS(todoList){
    localStorage.clear();
    localStorage.setItem("savedList", JSON.stringify(todoList));
}
export {  readFromLS, writeToLS};
