let currentval = document.querySelector(".previous-val");
let currentsolution = document.querySelector(".current-solution");
let historybox = document.querySelector(".history-content");



function display(val) {    
    currentval.innerHTML += val;
}

function calculate(){
    if(currentval.innerHTML === "" || 
        (
            !currentval.innerHTML.includes("+") &&
            !currentval.innerHTML.includes("-") &&
            !currentval.innerHTML.includes("/") &&
            !currentval.innerHTML.includes("%") &&
            !currentval.innerHTML.includes("*")
        )){
            return  currentsolution.innerHTML  = 0;
    }
    currentsolution.innerHTML  = eval(currentval.innerHTML);
    currentsolution.innerHTML =  currentsolution.innerHTML.substring(0,4);
    let list = document.createElement('li');
    list.innerHTML += ` ${currentval.innerHTML} = ${currentsolution.innerHTML} `;
    historybox.append(list);
    // currentval.innerHTML = "";
}



function displayclear(){
    currentsolution.innerHTML  = 0;
    currentval.innerHTML = "";
}

function displaydelete(){
    historybox.innerHTML = "";
}