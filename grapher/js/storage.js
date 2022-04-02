function readFromLS() {
    let listString = localStorage.getItem("polynomial");
    return JSON.parse(listString);
}
function writeToLS(expression){
    localStorage.clear();
    localStorage.setItem("polynomial", JSON.stringify(expression));
}
export {readFromLS, writeToLS};