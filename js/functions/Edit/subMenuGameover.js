import { isOpen } from "../Running/move.js";

function subMenuGameover (nombre_de_point, animation) {
    const game_content = document.querySelector(".game-content")


        const menu_game_over = document.createElement("div")

        menu_game_over.style.display = "flex"
        menu_game_over.style.justifyContent = "center"
        menu_game_over.style.alignItems = "center"
        menu_game_over.style.height = "100%"
        menu_game_over.style.width = "100%"
        menu_game_over.style.backgroundColor = "rgba(0,0,0,0.4)"
        menu_game_over.style.zIndex = "1"
        menu_game_over.style.top = "0px"
        menu_game_over.style.position = "fixed";

        menu_game_over.id = "menu_game_over"
        game_content.appendChild(menu_game_over)

            const div_content = document.createElement("div")

            div_content.style.display = "flex"
            div_content.style.justifyContent = "center"
            div_content.style.width = "50%"
            div_content.style.height = "60%"
            div_content.style.flexWrap = "wrap";

            div_content.id = "div_content"
            menu_game_over.appendChild(div_content)


                const div_titre = document.createElement("div")

                div_titre.style.display = "flex"

                div_titre.style.alignItems = "center"
                div_titre.style.justifyContent = "space-around"
                div_titre.style.width = "80%"
                div_titre.style.height = "20%"
                div_titre.style.border = "2px solid #C03030"
                div_titre.style.borderRadius = "10px"
                div_titre.style.fontSize = "3.3vw"

                div_titre.id = "div_titre"
                div_content.appendChild(div_titre)


                    const skull = document.createElement("img")
                    
                    skull.src = "./img/skull-icon.png"
                    skull.style.width = "50px";
                    skull.style.height = "50px";
                    skull.style.marginBottom = "4px"
                    skull.style.marginLeft = "6px"

                    div_titre.appendChild(skull)


                    const titre = document.createElement("span")

                    titre.innerText = "GAME OVER"
                    titre.style.color = "#C03030"
                    titre.style.fontWeight = "900";
                    titre.style.lineHeight = "97px";

                    div_titre.appendChild(titre)


                    const skull_two = document.createElement("img")
                    
                    skull_two.src = "./img/skull-icon.png"
                    skull_two.style.width = "50px";
                    skull_two.style.height = "50px";
                    skull_two.style.marginBottom = "4px"
                    skull_two.style.marginRight = "6px"

                    div_titre.appendChild(skull_two)

                

                const div_area_score = document.createElement("div")

                div_area_score.style.display = "flex"
                div_area_score.style.justifyContent = "center"
                div_area_score.style.width = "100%"
                div_area_score.style.height = "20%"
                
                div_content.appendChild(div_area_score)


                    const div_score = document.createElement("div")

                    div_score.style.display = "flex"
                    div_score.style.justifyContent = "space-around"
                    div_score.style.border = "2px solid white"
                    div_score.style.borderRadius = "10px"
                    div_score.style.width = "40%"
                    div_score.style.height = "48%";

                    div_area_score.appendChild(div_score)

                        const text_score = document.createElement("span")

                        text_score.innerText = "SCORE :"
                        text_score.style.display = "flex";
                        text_score.style.color = "white"
                        text_score.style.height = "100%"
                        text_score.style.alignItems = "center";
                        text_score.style.justifyContent = "center";
                        text_score.style.fontWeight = "900";
                        text_score.style.fontSize = "2.5vw";

                        div_score.appendChild(text_score)

                        const score = document.createElement("span")

                        score.innerText = nombre_de_point
                        score.style.display = "flex";
                        score.style.color = "white"
                        score.style.height = "100%"
                        score.style.alignItems = "center";
                        score.style.justifyContent = "center";
                        score.style.fontWeight = "900";
                        score.style.fontSize = "2.5vw";

                        div_score.appendChild(score)


            const area_buttun = document.createElement("div")


            area_buttun.style.display = "flex"
            area_buttun.style.flexWrap = "wrap";
            area_buttun.style.justifyContent = "space-around"
            area_buttun.style.width = "100%"
            area_buttun.style.height = "40%";

            area_buttun.id = "area_buttun"
            div_content.appendChild(area_buttun)

                const area_buttun_restart = document.createElement ("div")

                area_buttun_restart.style.display = "flex"
                area_buttun_restart.style.justifyContent = "center"
                area_buttun_restart.style.height = "40%"
                area_buttun_restart.style.width = "100%"

                area_buttun_restart.id = "area_buttun_restart"
                area_buttun.appendChild(area_buttun_restart)

                    const buttun_restart = document.createElement ("button")

                    buttun_restart.style.height = "100%"
                    buttun_restart.style.width = "40%"
                    buttun_restart.style.border = "0px"
                    

                    buttun_restart.classList.add("buttun")
                    buttun_restart.id = "buttun_restart"
                    area_buttun_restart.appendChild(buttun_restart)


                            const text_restart = document.createElement("span")

                            text_restart.innerText = "RESTART"

                            
                            text_restart.classList.add("text_buttun_white")
                            buttun_restart.appendChild(text_restart)


                const buttun_exit = document.createElement ("button")

                buttun_exit.style.height = "40%"
                buttun_exit.style.width = "40%"
                buttun_exit.style.border = "0px"



                buttun_exit.classList.add("buttun")
                buttun_exit.id = "buttun_exit"
                area_buttun.appendChild(buttun_exit)


                        const text_exit = document.createElement("span")

                        text_exit.innerText = "EXIT"
                        
                        text_exit.classList.add("text_buttun_white")
                        buttun_exit.appendChild(text_exit)

    buttun_restart.onclick = function redirection_jouer(){

        isOpen.gameOver = true
        menu_game_over.style.display = "none"
        animation.finish()
        animation.play()
        setTimeout(() => {
            isOpen.gameOver = false
        }, 3000);
    };

    buttun_exit.onclick = function redirection_jouer(){
        location.reload();
    };






}

export default subMenuGameover