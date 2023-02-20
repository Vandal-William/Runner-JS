import {isJump} from './jump.js';
import { isDown } from './down.js';
import subMenuPause from '../Edit/subMenuPause.js';
import {optionsLevel} from '../Edit/menu.js'
import {subMenuFinish} from '../Edit/subMenuFinish.js';
import {defaultCommand} from "../Edit/params.js";

const isOpen = {
    menu: false,
    gameOver: false
}

const finishScore = {
    score: 0,
}

import subMenuGameover from '../Edit/subMenuGameover.js';

let scoreSpeedMultiplier = null;
let scoreMultiplier = null;

function move(element, animationWidth, level, array) {
    // animation pour bouger la map
    const moveMap = element.animate({
        left : `-${animationWidth}px`, // taile d'un bloc A multiplié par le nombre de bloc A 
    }, {
        duration: level, // le temps de l'effet de slide jusqu'à (x)px
        iterations: 1,
        fill: "forwards",
    })
    moveMap.onfinish = () => {
        
        if(isOpen.gameOver === false){
            subMenuFinish(finishScore.score, moveMap)
        }
    }
    
    const allObstacles = []; //récupere la distance et le type de l'obstacle sous forme de clé/valeur
    array.map((obstacle) => {
        // récupère la left des obstacles et remplace le "px" par "vide" donc enleve le px de la valeur de déplacement des obstacles pour pouvoir le parseInt
        const positionObstacle = parseInt(obstacle.style.left.replace("px", "")) ;
        const typeObstacle = obstacle.className; //récupère la class de l'obstacle, B ou C
        allObstacles.push({"type": typeObstacle, "distance": positionObstacle });
    });

    const divDistence = document.createElement('div');
    divDistence.style.position = "fixed";
    divDistence.style.bottom = "0px";
    divDistence.style.right = "0px";

    const input = document.createElement('input');
    input.style.border = "3px solid orange";
    input.style.borderRadius = "5px";
    input.style.padding = "5px";
    input.style.textAlign = "center";
    input.style.width = "100px";
    divDistence.appendChild(input);
    element.appendChild(divDistence);
    
    setInterval(() => { // tout les X temps, relance 
             
        input.value = moveMap.effect.target.offsetLeft * (-1); //- + - = +
        
        allObstacles.forEach((obstacle) => { // Pour tous les obstacles
            // si la distance de l'obstacle moins la largeur du personnage est inférieur à la valeur de la position des obstacles alors il y a colision
            if (input.value > (obstacle.distance - 38) && input.value < (obstacle.distance - 38) + 15)  {
                if (obstacle.type === "B"){ //si c'est un obstacle B
                    if (isJump.jumping) { // alors il faut sauter 
                    }else{
                        colision(moveMap); //ou sinon il y a colision
                    }
                    
                }else {
                    if (isDown.down) { //si il s'est baissé
                    }else{
                        colision(moveMap);
                    }
                }
            }
        })
    
    })

    let score = 0; // initialisation du score
    let distanceTravelled = 0; // initialisation de la distance parcourue
    const intervalDuration = 10; // durée de l'actualisation du score
  
    const divScore = document.createElement('div');
    divScore.style.position = "fixed";
    divScore.style.color = "white";
    divScore.style.top = "62px";
    divScore.style.right = "20px";
  
    const scoreDisplay = document.createElement('span');
    scoreDisplay.style.border = "3px solid orange";
    scoreDisplay.style.borderRadius = "5px";
    scoreDisplay.style.padding = "5px";
    scoreDisplay.style.textAlign = "center";
    scoreDisplay.style.width = "100px";
    scoreDisplay.innerHTML = `Score: ${score}`;
    divScore.appendChild(scoreDisplay); // ajoute le score à la div
    element.appendChild(divScore); // ajoute la div au body

    switch (optionsLevel.level) { // on change la vitesse du jeu en fonction de l'option choisie
        case "1":
          console.log("11");
          scoreSpeedMultiplier = 0.2; 
        //   scoreMultiplier = 1;
          break;
        case "2":
          console.log("12"); 
          scoreSpeedMultiplier = 0.4;
        //   scoreMultiplier = 1;
          break;
        case "3":
          console.log("13"); 
          scoreSpeedMultiplier = 0.5;
        //   scoreMultiplier = 1.2;
          break;
        case "4":
          console.log("14"); 
          scoreSpeedMultiplier = 0.7;
        //   scoreMultiplier = 1.3;
          break;
        case "5":
          console.log("15"); 
          scoreSpeedMultiplier = 0.9;
        //   scoreMultiplier = 1.4;
          break;      
        default:
          console.log("10"); 
          scoreSpeedMultiplier = 0.2;
        //   scoreMultiplier = 1;
          break;
      }

    setInterval(() => {
        input.value = moveMap.effect.target.offsetLeft * (-1); // cette ligne fait en sorte que la valeur de la distance parcourue soit mise à jour
        const distance = parseInt(input.value); // le parseInt est nécessaire pour convertir la valeur en nombre entier
      
        if (distance > distanceTravelled + 200) { // mettre à jour le score toutes les 200 unités
          const points = 10; // 10 points pour 200 unités (ici c'est donc des pixels)
          score = Math.round(score + (points * scoreSpeedMultiplier)); // ajoute les points au score
          scoreDisplay.innerHTML = `Score: ${score}`; // mettre à jour le score
            finishScore.score = score
          distanceTravelled = distance; // mets à jour la distance parcourue
        }
      }, intervalDuration); // actualisation toutes les 10ms
            
      
    // event pause 
    document.addEventListener( "keydown", (e) => {
        if(e.key === defaultCommand.pause){
            if(isOpen.menu === false){
                isOpen.menu = true
                moveMap.pause()
                subMenuPause(moveMap)
            }
        }
    })
    
}

function colision(animation){
    
    animation.pause();// méthode pause lié à la méthode "animation"
    if (isOpen.gameOver === false) { 
        subMenuGameover(finishScore.score, animation)
        isOpen.gameOver = true
    }
    

}


export {move, isOpen}