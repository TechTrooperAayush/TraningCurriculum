
let countval = document.querySelector('.count-status');
let count = 0 ;
let countBody =  document.querySelector('.container');

let Colors = [ "#f8f9fa",
                "#e9ecef",
                "#dee2e6",
                "#ced4da",
                "#adb5bd",
                "#6c757d",
                "#495057",
                "#343a40",
                "#212529"
]


function UpdateDisplay(){
let Getcolor = Colors[Math.floor(Math.random() * Colors.length)];
countBody.style.backgroundColor = Getcolor;
}


function increment(){
    count++;
    countval.innerHTML = count;
    UpdateDisplay();
}


function decrement(){
    if(count <= 0)
        {
            return;
        }
        count--;
    countval.innerHTML = count;
    UpdateDisplay();
}
