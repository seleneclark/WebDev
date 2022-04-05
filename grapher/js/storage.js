function readFromLS() {
    let listString = localStorage.getItem("polynomial");
    if (listString !== null){
        return JSON.parse(listString);
    }
    else {
        listString = null;
        return listString;
    }
}
function writeToLS(expression){
    localStorage.clear();
    localStorage.setItem("polynomial", JSON.stringify(expression));
}
export {readFromLS, writeToLS};