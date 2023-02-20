function createLevel(){
    createButtons()
    let addBlocA = document.getElementById('bloc_A');
    addBlocA.addEventListener("click", function(){
        createBlockA();
        console.log(blocks)
        let sol =document.getElementById('nombresol')
        sol.textContent=`Sols Crées: ${numberBlockA-1}`

    })
    let addBlocB = document.getElementById('bloc_B');
    addBlocB.addEventListener("click", function(){
        createBlockB();
        console.log(blocks)
        let obs1 =document.getElementById('numberobs1')
        obs1.textContent=`Obstacles 1 Crées: ${numberBlockB-1}`
    })
    let addBlocC = document.getElementById('bloc_C');
    addBlocC.addEventListener("click", function(){
        createBlockC();
        console.log(blocks)
        let obs2 =document.getElementById('numberobs2')
        obs2.textContent=`Obstacles 2 Crées: ${numberBlockC-1}`
    })

    document.getElementById("bloc_Aremove").addEventListener("click", function(){
        let BlocAremove = document.getElementById("A"+ (numberBlockA-1));
        BlocAremove.remove();
        /*blocks.splice(blocks.indexOf(BlocAremove),1)*/
        removeLastBlock("A");
        console.log(blocks)
        numberBlockA = numberBlockA -1;
        let sol =document.getElementById('nombresol')
        sol.textContent=`Sols Crées: ${numberBlockA-1}`


        let map = document.querySelector(".map");
        let floorwidth = document.getElementById("floor").offsetWidth;
        map.style.width=`${floorwidth}px`
        if (numberBlockA==1){
            let containerAremove = document.getElementById("floor")
            containerAremove.remove();
        }
     })
     document.getElementById("bloc_Bremove").addEventListener("click", function(){
        let BlocBremove = document.getElementById("B"+ (numberBlockB-1));
        BlocBremove.remove();
        removeLastBlock("B");
        console.log(blocks)
        numberBlockB = numberBlockB -1;
        let obs1 =document.getElementById('numberobs1')
        obs1.textContent=`Obstacles 1 Crées: ${numberBlockB-1}`
     })
     document.getElementById("bloc_Cremove").addEventListener("click", function(){
        let BlocCremove = document.getElementById("C"+ (numberBlockC-1));
        BlocCremove.remove();
        removeLastBlock("C");
        console.log(blocks)
        numberBlockC = numberBlockC -1;
        let obs2 =document.getElementById('numberobs2')
        obs2.textContent=`Obstacles 2 Crées: ${numberBlockC-1}`
     })


}

function createButtons(){
        let leveldiv = document.createElement("div")
        leveldiv.classList.add("leveldiv")
        leveldiv.style.display = "flex";
        leveldiv.style.minWidth = "100%";
        leveldiv.style.height = "90vh";
        leveldiv.style.position = "relative";

        let map = document.createElement("div")
        map.classList.add("map")
        map.style.display = "flex";
        map.style.alignItems ="flex-end"
        map.style.width = "100%";
        map.style.height = "400px";
        map.style.position = "absolute";
        map.style.bottom ="0"
        map.style.left ="0"

        let textdiv = document.createElement("div")
        textdiv.classList.add("textdiv")
        
        let text = document.createElement("p")
        let text2 = document.createElement("p")
        let text3 = document.createElement("p")
       
        text.classList.add("text")
        text.innerHTML = "Sol"
        text2.innerHTML = "Obstacle 1"
        text2.classList.add("text2")
        text3.innerHTML = "Obstacle 2"
        text3.classList.add("text3")

        const top = document.createElement("div")
        top.id="topSection"
        leveldiv.appendChild(top)

        top.appendChild(textdiv)
        textdiv.appendChild(text)
        textdiv.appendChild(text2)
        textdiv.appendChild(text3)


    let buttons = document.createElement("div");
    buttons.classList.add("buttons")
    let button1 = document.createElement("button");
    button1.classList.add("btn_level");
    let button1Remove = document.createElement("button");
    button1Remove.classList.add("btn_level");
    let button2 = document.createElement("button");
    button2.classList.add("btn_level");
    let button2Remove = document.createElement("button");
    button2Remove.classList.add("btn_level");
    let button3 = document.createElement("button");
    button3.classList.add("btn_level");
    let button3Remove = document.createElement("button");
    button3Remove.classList.add("btn_level");
    button1.innerHTML = "+"
    button1Remove.innerHTML = "-"
    button2.innerHTML = "+"
    button2Remove.innerHTML = "-"
    button3.innerHTML = "+"
    button3Remove.innerHTML = "-"

    button1.id = "bloc_A"
    button1Remove.id = "bloc_Aremove"
    button2.id = "bloc_B"
    button2Remove.id = "bloc_Bremove"
    button3.id = "bloc_C" 
    button3Remove.id = "bloc_Cremove" 

    buttons.appendChild(button1)
    buttons.appendChild(button1Remove)
    buttons.appendChild(button2)
    buttons.appendChild(button2Remove)
    buttons.appendChild(button3)
    buttons.appendChild(button3Remove)
    top.appendChild(buttons)
    document.body.appendChild(leveldiv)
    leveldiv.appendChild(map)

    let numbersDiv = document.createElement("div")
    numbersDiv.classList.add("numbersDiv")
    const sol = document.createElement("p")
    const obstacle1 = document.createElement("p")
    const obstacle2 = document.createElement("p")
    sol.className="numbers"
    sol.id="nombresol"
    sol.textContent=`Sols Crées: ${numberBlockA-1}`
    obstacle1.className="numbers"
    obstacle1.id="numberobs1"
    obstacle1.textContent=`Obstacles 1 Crées: ${numberBlockB-1}`
    obstacle2.className="numbers"
    obstacle2.id="numberobs2"
    obstacle2.textContent=`Obstacles 2 Crées: ${numberBlockC-1}`
    top.appendChild(numbersDiv)
    numbersDiv.appendChild(sol)
    numbersDiv.appendChild(obstacle1)
    numbersDiv.appendChild(obstacle2)

}
const blocks = [];
var numberBlockA = 1
function createBlockA(){
    let map = document.querySelector(".map");
    let divContainer = document.querySelector(".container");
    if (!divContainer) {
        divContainer = document.createElement("div");
        divContainer.classList.add("container");
        divContainer.id = "floor"
        divContainer.style.display = "flex";
        divContainer.style.alignItems = "flex-end";
        divContainer.style.position = "absolute";
        divContainer.style.bottom ="0";
        map.appendChild(divContainer);

    }
    let blockA = document.createElement("div");
    blockA.classList.add("blockA");
    blockA.style.width = "200px";
    blockA.style.height = "100px";
    blockA.id = "A" + numberBlockA;
    /*blockA.style.backgroundColor = "red";
    blockA.style.border = "1px solid black";*/
    blockA.style.display = "inline-block";
    let img1 = new Image(200,100)
    img1.src = './img/test.png'

    blockA.appendChild(img1)
    divContainer.appendChild(blockA);
    blocks.push({type:"A"})
    let floorwidth = document.getElementById("floor").offsetWidth;
    map.style.width=`${floorwidth}px`

    numberBlockA++;

}


var numberBlockB = 1
function createBlockB(){
    let floorwidth = document.getElementById("floor").offsetWidth;
    let map = document.querySelector(".map");
    let blockB = document.createElement("div");
    blockB.classList.add("blockB");
    blockB.id="B"+numberBlockB;
    blockB.style.position="absolute"
    blockB.style.width = "50px";
    blockB.style.height = "50px";
    blockB.style.bottom="100px";
    blockB.style.left =`${floorwidth-50}px`;


    let img2 = new Image(50,50)
    img2.src = './img/spikes.png'
    blockB.appendChild(img2)
    map.appendChild(blockB)
    blocks.push({type:"B"})
    numberBlockB++;

    map.style.width=`${floorwidth}px`

}



var numberBlockC = 1
function createBlockC(){
    let floorwidth = document.getElementById("floor").offsetWidth;
    let map = document.querySelector(".map");
    let divContainerC = document.createElement("div");
        divContainerC.classList.add("containerC");
        divContainerC.style.display = "flex";
        divContainerC.style.alignItems = "flex-end";
        divContainerC.style.position = "absolute";
        divContainerC.style.bottom ="200px";
        divContainerC.style.left =`${floorwidth}px`;
        divContainerC.id = "C" + numberBlockC;

    let blockC = document.createElement("div");
    blockC.classList.add("blockC");
    blockC.style.width = "100px";
    blockC.style.height = "100px";


    blockC.style.display = "inline-block";
    let img1 = new Image(100,100)
    img1.src = './img/corbo_itachi.png'

    blockC.appendChild(img1)
    map.appendChild(divContainerC);
    divContainerC.appendChild(blockC);
    blocks.push({type:"C"})
    numberBlockC++;

}

const removeLastBlock = (type) => {
    for (let i = blocks.length - 1; i >= 0; i--) {
      if (blocks[i].type === type) {
        blocks.splice(i, 1);
        break; // remove only the first element that matches the type
      }
    }
  };

export {blocks,numberBlockA,numberBlockB,numberBlockC};
export default createLevel;

