const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);

function makeHero(event){
    event.preventDefault(); //so the form won't be submitted
    const hero = {}; // creates and empty object
    hero.name = form.heroName.value;
    hero.realName = form.realName.value;
    hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);    
    hero.age = form.age.value;
    hero.category = form.category.value
    hero.city = form.city.value;
    hero.origin = form.origin.value;
    
    alert(JSON.stringify(hero));//convert object to JSON string
}



document.forms.hero.powers[0].checked = true;

const label = form.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);
form.heroName.addEventListener('keyup', validateInline);


function validateInline() {
    const heroName = this.value.toUpperCase();
    if(heroName.startsWith('X')){
    error.style.display = 'block';
    } else {
    error.style.display = 'none';
    }
}


form.heroName.addEventListener('keyup',disableSubmit,false);
function disableSubmit(event) {
    if(event.target.value === ''){
        document.getElementById('submit').disabled = true;
    } else {
        document.getElementById('submit').disabled = false;
    }
}
