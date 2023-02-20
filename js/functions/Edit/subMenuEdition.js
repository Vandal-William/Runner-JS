import createLevel from "./createLevel.js";
import exportLevel from "./exportLevel.js";
function subMenuEdition(){
    const gamecontent = document.querySelector(".game-content")
    const madiv = document.createElement("div");
    const divContent = document.createElement("div");
    const divNav = document.createElement("div");
    const divLR = document.createElement("div");
    const divRight = document.createElement("div");
    const divLeft = document.createElement("div");

    const btnExport = document.createElement("button");
    const Title = document.createElement("h1");
    const rightTitle = document.createElement("h2");
    const text_import = document.createElement("span")
    

    madiv.style.display = "flex";
    madiv.style.width = "100%";
    madiv.style.height = "100vh";
    madiv.style.overflow = "hidden";

    divContent.style.width = "100%";
    divContent.style.height = "100vh";
    divContent.style.overflow = "hidden";

    divNav.style.display = "flex";
    divNav.style.alignContent = "center";
    divNav.style.justifyContent = 'center';
    divNav.style.padding = '5px';
    divNav.style.width = "100%";
    divNav.style.height = "10vh";
    divNav.style.backgroundColor = "#ffffff";
    divNav.style.border = "2px solid #FFBB0B";
    Title.innerText = "EDITION DE MAP";
    Title.style.fontSize = '60px';


    divLR.style.display = 'flex';
    divLR.style.position = 'relative';
    divLR.style.width = '100%';
    divLR.style.height = '100vh';

    divLeft.style.width = "60%";
    divLeft.style.height = "90vh";
    divLeft.style.backgroundColor = "#FFBB0B";
    divLeft.style.overflow="auto";
    divLeft.style.overflowY="hidden"
    createLevel();
    let leveldiv = document.querySelector(".leveldiv");
    divLeft.appendChild(leveldiv);
    

    divRight.style.width = "40%";
    divRight.style.height = "90vh";
    divRight.style.backgroundColor ="black"
    divRight.style.backgroundImage = "url('./img/back.png')";
    divRight.style.backgroundSize = "100% 100%";
    divRight.style.backgroundRepeat = "no-repeat";
    divRight.style.justifyContent = "center";

    rightTitle.textContent = " PARAMETRES";
    rightTitle.style.color = "#ffffff";
    rightTitle.style.textAlign = "center";
    rightTitle.style.fontSize = "40px"
    rightTitle.style.fontWeight = "900";

    btnExport.style.display = "flex"
    btnExport.id="export"
    btnExport.style.backgroundColor = "#FFBB0B"
    btnExport.style.justifyContent = "center"
    btnExport.style.alignItems = "center";
    btnExport.style.height = "12%"
    btnExport.style.width = "35%"
    btnExport.style.border ="solid 3px #FFFFFF"
    btnExport.style.borderRadius = "25px"
    btnExport.style.margin = "17% 35%";
    btnExport.style.cursor = "pointer";

    text_import.innerText = "Export LEVEL"
    text_import.style.fontSize = "20px";
    text_import.style.fontWeight = "900";
    text_import.style.color = "#ffffff"

    //form

    const divForm = document.createElement("div");
    divForm.style.display = "flex";
    divForm.style.width = "50vh";
    divForm.style.height = "50vh";
    divForm.style.padding = "20px 30px 0px 20px"

    const form = document.createElement("form");
    form.setAttribute('action', '#');
    form.style.margin = "20% 10% 0% 20%"
    // form.style.backgroundColor = "#FFBB0B";

    const div_el1 = document.createElement("div");
    div_el1.style.display = "flex";
    div_el1.style.alignContent = "center";
    div_el1.style.paddingBottom = "20px";
        const inputLabel = document.createElement('label');
        inputLabel.textContent = 'TITRE : ';
        inputLabel.style.color = 'white';
        inputLabel.style.fontWeight = "900";
        inputLabel.style.fontSize = "30px";
        inputLabel.style.paddingRight = "20px";

        const inputTitre = document.createElement("input");
            inputTitre.setAttribute('type', 'text');
            inputTitre.setAttribute('name', 'nom');
            inputTitre.style.background = "none";
            inputTitre.style.border = "1px solid white";
            inputTitre.style.borderRadius = "15px";
            inputTitre.style.marginLeft = "74px";
            inputTitre.style.color = "white";
            inputTitre.style.paddingLeft ="10px";
            inputTitre.id ="input_titre"
        div_el1.append(inputLabel, inputTitre);
        form.append(div_el1);

    const div_el2 = document.createElement("div");
    div_el2.style.display = "flex";
    div_el2.style.alignContent = "center";
    div_el2.style.paddingBottom = "20px";
        const inputLabel2 = document.createElement('label');
        inputLabel2.textContent = 'CREATEUR : ';
        inputLabel2.style.color = 'white';
        inputLabel2.style.fontWeight = "900";
        inputLabel2.style.fontSize = "30px";
        inputLabel2.style.paddingRight = "20px";

        const inputCreateur = document.createElement('input');
            inputCreateur.setAttribute('name', 'prenom');
            inputCreateur.setAttribute('type', 'text');
            inputCreateur.style.background = "none";
            inputCreateur.style.border = "1px solid white";
            inputCreateur.style.borderRadius = "15px";
            inputCreateur.style.color = "white";
            inputCreateur.style.paddingLeft ="10px";
            inputCreateur.id = "input_creator"
        div_el2.append(inputLabel2, inputCreateur);
        form.appendChild(div_el2);

    const div_el3 = document.createElement("div");

        const inputLabel3 = document.createElement('label');
        inputLabel3.textContent = 'DIFFICULTY : ';
        inputLabel3.style.color = 'white';
        inputLabel3.style.fontWeight = "900";
        inputLabel3.style.fontSize = "30px";
        inputLabel3.style.paddingRight = "70px";

        const inputSelect = document.createElement('select');
        const options = ["1", "2", "3","4","5"];
        for(var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.text = options[i];
        inputSelect.add(option);
        }
        inputSelect.setAttribute('type', 'number');
        inputSelect.id = "input_select"
        div_el3.append(inputLabel3, inputSelect);
        form.appendChild(div_el3);


        form.appendChild(btnExport)


    divForm.appendChild(form);


    gamecontent.appendChild(madiv);
    madiv.appendChild(divContent);
    divContent.append(divNav,divLR);
    divLR.append(divLeft,divRight);
    divNav.appendChild(Title);
    divRight.append(rightTitle, form, divForm);
    btnExport.appendChild(text_import);


    const titleInput = document.getElementById("input_titre");
    const creatorInput = document.getElementById("input_creator");
    const difficultyInput = document.getElementById("input_select");

    const devexport= document.getElementById('export');
        devexport.addEventListener("click", function(){
            exportLevel(titleInput,creatorInput,difficultyInput);
        })


}
export default subMenuEdition;
