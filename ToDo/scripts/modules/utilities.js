'use strict';

function useUtilities(todos){
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

export { useUtilities };