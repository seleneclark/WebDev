//Access the form elements

//const form = document.forms[0]; //first one in the collection
//const form = document.forms.search; //using name 'search'
//const form = document.forms['search']; //also using name 'search'
//const [input, button] = form.elements; //returns the listed elements


//See forms trigger some events

//const form = document.forms['search'];
//const input = form.elements.searchInput;
//input.addEventListener('focus', () => alert('focused'), false);
//input.addEventListener('change', () => alert('changed'), false);
//input.addEventListener('blur', () => alert('blurred'), false);


const form = document.forms['search'];
form.addEventListener('submit', search, false);
const input = form.elements.searchInput;
input.value = 'Search Here';
function search(event){
//    alert('Form Submitted');
    alert(`You searched for:  ${input.value}`);
    event.preventDefault();
}


//Uses Javascript to have placeholder text
input.addEventListener('focus', function() {
    if (input.value === 'Search Here'){
        input.value = '';
    }
}, false);

input.addEventListener('blur', function() {
    if (input.value === ''){
        input.value = 'Search Here';
    }
}, false);
