const div = document.createElement("div")
div.style.width = "50px"
div.style.height = "50px"
div.style.position = "absolute"
div.style.top = "250px"
div.style.left = "700px"
div.style.background = "black"
div.style.color = "white"
div.style.transition = 'top 0.3s ease-out';
document.body.append(div)

// FONCTION DOWN

function down() {
    document.addEventListener("keydown", (e) => {
        if (e.keyCode === 75) {
            div.style.height = "-50px"
        }
    }
)}
down()