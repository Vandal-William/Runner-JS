import {defaultCommand} from "../Edit/params.js";
const isDown = {
    down : false
}

function down(character) {

    document.addEventListener("keydown" , (e) => {
        if ( e.key == defaultCommand.down) {
            isDown.down = true;
            character.style.backgroundImage = "url('./img/roulade.gif')";
            character.style.backgroundPositionY = "-155px";
            character.style.width = "80px";
            character.style.height = "85px";
            character.style.bottom = "100px";

            setTimeout(() => { 
            isDown.down = false
            character.style.backgroundImage = "url('./img/running.gif')"; 
            character.style.height = "200px";
            character.style.width = "65px";
            character.style.backgroundPositionY = "-50px";
            }, 1500)
        }
      })

}

export {down, isDown};
