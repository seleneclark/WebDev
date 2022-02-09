'use strict';
const all = document.getElementById("allTasksleft").addEventListener("mousedown", todos.getAllTasks);
const active = document.getElementById("activeTasksleft").addEventListener("mousedown", todos.getActiveTasks);
const complete = document.getElementById("completedTasksleft").addEventListener("mousedown", todos.getCompletedTasks);

export { all, active, complete};