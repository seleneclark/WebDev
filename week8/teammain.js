
const apiButton = document.getElementById('star');
const outputDiv = document.getElementById('output');
const nextButton = document.getElementById('next');


const swURL = 'http://swapi.dev/api/people';



const newPage = (x) => {
    fetch(x)
    .then( response => {
        outputDiv.innerHTML = 'Waiting for response...';
    if(response.ok) {
        return response;
    }
    throw Error(response.statusText);
    })
    .then( response => response.json() )
    .then( data =>  displayContent(data))
    .catch( error => console.log('There was an error:', error))
}


function displayContent(data){
    console.log(data);    
    outputDiv.innerHTML = displayList(data.results);
    
    nextButton.addEventListener('click',() => newPage(data.next));
    
}

function displayList(x){
    console.log(x);
    let txt = "<ul>"
    x.forEach(a => {txt +=`<li>`+ a.name+ `</li>` });
    txt += "</ul>";
    return txt;

}

function next(){

}
apiButton.addEventListener('click', () => newPage(swURL), false);
