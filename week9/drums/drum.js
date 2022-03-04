function playSound(e) {
    console.log(e.keyCode);
    let sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let play = document.querySelector(`div[data-key="${e.keyCode}"]`);
    play.style.transform = 'translateY(10px)';
    play.classList.add('playing');
    let audio = new Audio(`${sound.getAttribute("src")}`);
    audio.play();
}

function removePlaying(e){
    e.target.classList.remove('playing');  
}

document.addEventListener('keypress', playSound);
document.addEventListener('transitionend', removePlaying);

