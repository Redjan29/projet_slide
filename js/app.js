/* optimiser le chargement du js et créer un objet pour gérer les 3 fonctions 10/20 */
document.addEventListener("DOMContentLoaded", e => {
    console.log(navigator.userAgent);

const items = document.querySelectorAll('img');
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count = 0;

let objet = {
    slideSuivante(){
        items[count].classList.remove('active');
    
        if(count < nbSlide - 1){
            count++;
        } else {
            count = 0;
        }
    
        items[count].classList.add('active')
        console.log(count);
        
    },

    slidePrecedente(){
        items[count].classList.remove('active');
    
        if(count > 0){
            count--;
        } else {
            count = nbSlide - 1;
        }
    
        items[count].classList.add('active')
        // console.log(count);
        
    },
     keyPress(e){
        console.log(e);
        
        if(e.keyCode === 37){
            objet.slidePrecedente();
        } else if(e.keyCode === 39){
            objet.slideSuivante();
        }
    }
    
};


suivant.addEventListener('click', objet.slideSuivante)

precedent.addEventListener('click', objet.slidePrecedente)

document.addEventListener('keydown', objet.keyPress);


   }) ;