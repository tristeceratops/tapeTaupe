let button2 = document.getElementsByClassName('jeux');
let h1 = document.querySelector('h1');
let score = 0;
let vitesse = 1010;
let selectorTaupe = document.getElementsByClassName('taupe');
let boutonPlus = document.getElementsByClassName('plus');
let boutonMoins = document.getElementsByClassName('moins');
var intervalCouleur;
var intervalTaupe

let tableauCouleur = ["orange","cyan","purple"];

let audioMarteau = new Audio("marteau.mp3");
let audioCri = new Audio("cri.mp3");

// On renvoie un entier aléatoire entre une valeur min (incluse)
// et une valeur max (incluse).
// Attention : si on utilisait Math.round(), on aurait une distribution
// non uniforme !
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }
  

function changerCouleur(){

    for(i = 0; i < button2.length; i++) {
        let couleur =  tableauCouleur[getRandomIntInclusive(0,2)]  
        button2[i].style.backgroundColor = couleur;
        button2[i].style.borderColor = couleur;
      }
}

function taperTaupe(){
  score = score +  500;
  h1.textContent = "SCORE : " + score;
  audioCri.play();
}

function taperCaseVide() {
  score = score -  100;
  h1.textContent = "SCORE : " + score;
  audioMarteau.play();
}

function taupe()
{
    for(i = 0; i < button2.length; i++) {
        button2[i].classList.remove('taupe');
      }
 button2[getRandomIntInclusive(0,button2.length-1)].classList.add('taupe');
 selectorTaupe = document.getElementsByClassName('taupe');
 
 for(i = 0; i < button2.length; i++) {
  button2[i].removeEventListener('click',taperTaupe);
  button2[i].addEventListener('click',taperCaseVide);
      
    };

 for(i = 0; i < selectorTaupe.length; i++) {
  selectorTaupe[i].addEventListener('click', taperTaupe);
}
}

function lancerJeu(){
  changerCouleur();
  taupe();
  intervalCouleur = setInterval(changerCouleur,500);
  intervalTaupe = setInterval(taupe,500);
  rangeSpeed= document.getElementById("speed")
  if (rangeSpeed.value < 20) {
    document.getElementsByTagName('body')[0].style.backgroundColor = "rgb(134, 223, 53)";
  }
  else if (rangeSpeed.value < 50) {
    document.getElementsByTagName('body')[0].style.backgroundColor = "rgb(227, 230, 50)";
  }
  else if (rangeSpeed.value < 80) { 
    document.getElementsByTagName('body')[0].style.backgroundColor = "rgb(225, 24, 53)";
  }
  else {

    document.getElementsByTagName('body')[0].style.backgroundColor = "rgb(24, 23, 23)";
  }
  
}

//add event update listener to the range input element
rangeSpeed= document.getElementById("speed")
rangeSpeed.addEventListener('change', function() {
  clearInterval(intervalCouleur);
  clearInterval(intervalTaupe);
  valeur = Math.abs(rangeSpeed.value -100)*10;
  intervalCouleur = setInterval(changerCouleur,valeur);
  intervalTaupe = setInterval(taupe,valeur);
  if (rangeSpeed.value < 20) {
    document.getElementsByTagName('body')[0].style.backgroundColor = "rgb(134, 223, 53)";
  }
  else if (rangeSpeed.value < 50) {
    document.getElementsByTagName('body')[0].style.backgroundColor = "rgb(227, 230, 50)";
  }
  else if (rangeSpeed.value < 80) { 
    document.getElementsByTagName('body')[0].style.backgroundColor = "rgb(225, 24, 53)";
  }
  else {
    document.getElementsByTagName('body')[0].style.backgroundColor = "rgb(24, 23, 23)";
  }
})

lancerJeu();