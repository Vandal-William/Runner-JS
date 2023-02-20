import {defaultCommand} from "../Edit/params.js";
// FONCTION JUMP$
const isJump = {
  jumping : false
}
function jump(character) {
  
    let maxHeight = 100; // taille de saut maximum
    let duration = 1200; // durée de l'animation
    let start = null; // l'animation commence à null
    let initialY = parseInt(character.style.bottom); // j'initialise la position du personnage
  
    document.addEventListener("keydown", (e) => {
      if (e.key === defaultCommand.jump && !isJump.jumping){
        isJump.jumping = true;
        start = performance.now(); // démarre l'animation
        requestAnimationFrame(jumpAnimation);
      }
    });
  
    function jumpAnimation(timestamp) {
      if (!start) start = timestamp; // si l'animation n'a pas commencé, elle se lance
      character.style.backgroundImage = "url('./img/jump.gif')"; // change l'image du personnage
      let timeElapsed = timestamp - start; // calcule le temps écoulé depuis le début de l'animation
      let progress = Math.min(timeElapsed / duration, 1); // calcul le pourcentage de progression de l'animation
      let height = maxHeight * (-4 * progress * (progress - 1)); // j'utilise la formule d'une parabole pour définir le saut
      character.style.bottom = `${initialY + height}px`; // défini la position du personnage
      if (progress < 1) { 
        requestAnimationFrame(jumpAnimation); // si l'animation n'est pas terminée, elle continue de s'exécuter
      } else {
        isJump.jumping = false; // si l'anim est terminée, elle s'arrête
        character.style.backgroundImage = "url('./img/running.gif')"; // réinitialise l'image du personnage
        character.style.bottom = `${initialY}px`; // réinitialise la position du personnage
      }
    }
  }
  
  export {jump, isJump };
  