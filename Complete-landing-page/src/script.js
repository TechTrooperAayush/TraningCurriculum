const navbar = document.getElementById('header');
let prevpos = window.pageYOffset;
const openBtn = document.getElementById('open-menu-btn');
const popMenu = document.getElementById('pop-up-menu');
const largerdevies = window.matchMedia('min-width:768px' && 'max-width:1024px');
let navstatus = false;

window.onresize = function(){
    if(navbar.clientWidth >= 1024)
        {
            popMenu.style.display = "none";
            navbar.style.height = "100px";
        } 
    else if(navbar.clientWidth <= 1024)
    {
        navbar.style.height = "80px";
    }
    else if (navbar.clientWidth <= 640){
        navbar.style.height = "70px";
    }
        console.log("hello" + navbar.clientWidth);
}

let view = window.onscroll ;
 view = function(){
    
    let currentpos = window.pageYOffset;

    if (currentpos === 0)
    {
        navbar.style.top = "0";
        navbar.style.position = "static";
    }
    else if(prevpos > currentpos)
    {
        navbar.style.top = "0";
        navbar.style.position = "fixed";
    }
    else{
        navbar.style.top = "-170px"; 
    }

    prevpos = currentpos;
}

openBtn.addEventListener("click",function(){

    if(!navstatus)
    {
        navbar.style.height = "480px";
        popMenu.style.display = "flex";
        navstatus = true;
    }
    else{
        navbar.style.height = "80px";
        popMenu.style.display = "none";
        navstatus = false; 
    }

})

