let currentval = document.querySelector(".previous-val");
let currentsolution = document.querySelector(".current-solution");
let showdata =  currentval.innerHTML;


function display(val) {    
    currentval.innerHTML += val;
}

function calculate(){
    if(currentval.innerHTML  === ""){
      return  currentsolution.innerHTML  = 0;
    }
    currentsolution.innerHTML  = eval(currentval.innerHTML);
}

function displayclear(){
    currentsolution.innerHTML  = 0;
    currentval.innerHTML = "";
}