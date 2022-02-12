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


//saving just in case

// const todoListStart = [
//     {
//         id: '',
//         content: 'Grocery Shopping',
//         completed: false
//     },
//     {
//         id: '',
//         content: 'Pick up Dog',
//         completed: false
//     },
//     {
//         id: '',
//         content: 'Bake a cake',
//         completed: true
//     },
//     {
//         id: '',
//         content: 'Finish homework',
//         completed: true
//     },
//     {
//         id: '',
//         content: 'Practice piano',
//         completed: true
    
//     }
// ]
// function getList() {
//     return todoListStart;
// }