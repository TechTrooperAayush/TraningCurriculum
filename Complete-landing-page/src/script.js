let navbar = document.getElementById('header');
let prevpos = window.pageYOffset;

window.onscroll = function(){
    
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