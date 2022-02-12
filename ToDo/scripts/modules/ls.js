'use strict';

// Reads JSON ToDo list from localStorage returns to TODOS.js using key "savedList"
function readFromLS() {
    let listString = localStorage.getItem("savedList");
    return JSON.parse(listString);

}
//Saves Todo List in Local Storage under the key name "savedList"
function writeToLS(todoList){
    localStorage.clear();
    localStorage.setItem("savedList", JSON.stringify(todoList));
}
export {  readFromLS, writeToLS};
