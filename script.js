let button2 = document.getElementsByClassName('jeux');
let h1 = document.querySelector('h1');
let score = 0;
let vitesse = 1010;
let selectorTaupe = document.getElementsByClassName('taupe');
let boutonPlus = document.getElementsByClassName('plus');
let boutonMoins = document.getElementsByClassName('moins');
var intervalCouleur;
var intervalTaupe

let tableauCouleur = ["red","blue","green"];
let tableauVitesse = ["100","350","700","850","1050"];
let tableauVitesseIndex = 2;

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

function vitessePlusVite(){
 if(tableauVitesseIndex > 0)
 {
  tableauVitesseIndex --;
 }
 vitesse = tableauVitesse[tableauVitesseIndex];
  console.log(vitesse);
  clearInterval(intervalCouleur);
  clearInterval(intervalTaupe);
  intervalCouleur = setInterval(changerCouleur,vitesse);
  intervalTaupe = setInterval(taupe,vitesse);  
}

function vitesseMoinsVite(){
  if(tableauVitesseIndex < 4)
  {
    tableauVitesseIndex ++;
  }
  vitesse = tableauVitesse[tableauVitesseIndex];
  console.log(vitesse);
  clearInterval(intervalCouleur);
  clearInterval(intervalTaupe);
  intervalCouleur = setInterval(changerCouleur,vitesse);
  intervalTaupe = setInterval(taupe,vitesse); 
}

function lancerJeu(){
  changerCouleur();
  taupe();
  vitesse = tableauVitesse[tableauVitesseIndex];
  intervalCouleur = setInterval(changerCouleur,vitesse);
  intervalTaupe = setInterval(taupe,vitesse);  
}

for(i = 0; i < boutonPlus.length; i++) {
  boutonPlus[i].removeEventListener('click',vitessePlusVite);
  boutonPlus[i].addEventListener('click', vitessePlusVite);
}
for(i = 0; i < boutonMoins.length; i++) {
  boutonMoins[i].removeEventListener('click',vitesseMoinsVite);
  boutonMoins[i].addEventListener('click', vitesseMoinsVite);
}

lancerJeu();




