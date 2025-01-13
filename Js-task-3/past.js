let heroSection = document.querySelector(".hero-section");
let loginSection = document.querySelector(".login-page-section");
let signupSection = document.querySelector(".sign-up-section");
let todoSection = document.querySelector(".todo-section");
let logemail = document.querySelector(".log-in-email");
let logPassword = document.querySelector(".log-in-password");
let signupForm = document.querySelector(".sign-up-form");
let loginForm = document.querySelector(".login-form");
let signName = document.querySelector(".sign-up-name");
let signEmail = document.querySelector(".sign-up-email");
let signPassword = document.querySelector(".sign-up-password");
let waves = document.querySelector(".wavy");
let todoinput = document.querySelector(".todo-input");
let todobox = document.querySelector(".todo-box");
let addBtn = document.querySelector(".add-btn");
let username = document.querySelector(".username");

let storedusers = [];


console.log(storedusers);



  function signupdata(e) {
  e.preventDefault();
    let signupName = signName.value;
    let signupEmail = signEmail.value;
    let signupPassword = signPassword.value;
  
    let users = {
      name: signupName,
      email: signupEmail,
      password: signupPassword,
       };
    console.log(users, "users");
  
    storedusers.push(users);
  
    localStorage.setItem("signupinfo", JSON.stringify(storedusers));
    loginPage();
    signName.value = "";
    signEmail.value = "";
    signPassword.value = "";
  }
  
  function loginPage() {
    heroSection.style.display = "none";
    signupSection.style.display = "none";
    todoSection.style.display = "none";
    loginSection.style.display = "flex";
  }
  
  function Backhome() {
    loginSection.style.display = "none";
    signupSection.style.display = "none";
    todoSection.style.display = "none";
    heroSection.style.display = "flex";
  }
  
  function signup() {
    loginSection.style.display = "none";
    todoSection.style.display = "none";
    signupSection.style.display = "flex";
  }
  
  function Todopage(e) {
    e.preventDefault();
    let loginEmail = logemail.value;
    let loginPassword = logPassword.value;
  
    let userdata = JSON.parse(localStorage.getItem("signupinfo"));
    console.log(userdata);
  
    userdata.some((user) => {
      if (user.email === loginEmail && user.password === loginPassword) {
        console.log("worked");
        heroSection.style.display = "none";
        signupSection.style.display = "none";
        loginSection.style.display = "none";
        todoSection.style.display = "flex";
        waves.style.display = "none";
        username.innerText = `Hi ${user.name}`  
        logemail.value = "";
        logPassword.value = ""; 
      } else {
        console.log("Not working");
        logemail.value = "";
        logPassword.value = "";
      }
    });

  }
  
  signupForm.addEventListener("submit", signupdata);
  loginForm.addEventListener("submit", Todopage);
  
  addBtn.addEventListener("click",function(){
   let todoval = todoinput.value;
   if(todoval == ""){
    alert("input invalid !!!")
   }
   else{

     
     let li = document.createElement("li");
    li.classList.add("todo-div");

    let checkval = document.createElement("input");
    checkval.type = "checkbox";
    checkval.classList.add("todo-checkbox");
    
    let todohead = document.createElement("h2");
    todohead.classList.add("todo-input-head");
    todohead.innerText = todoval;
    todohead.setAttribute("contenteditable","False");
    
    // let timespan = document.createElement("span");
    // timespan.classList.add("todo-span");
    // timespan.innerText = "hello89";
    
    let editBtn  = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(94,94,94,1)"><path d="M5 18.89H6.41421L15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89ZM21 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L9.24264 18.89H21V20.89ZM15.7279 6.74785L17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785Z"></path></svg>
    `
    
    let delBtn  = document.createElement("button");
    delBtn.classList.add("del-btn");
    delBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(94,94,94,1)"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>
    `
    
    todobox.append(li);
    li.append(checkval ,todohead ,  editBtn , delBtn  );
    todoinput.value = ""; 
    
    // added a time showing functionalities
    // let starttime = Date.now();
    // function updatetime(){
    //   if(starttime)
    //   {
    //     let currenttime = new Date();
    //     let updatedtime = currenttime - starttime;
    //     let updatedval = Math.floor(updatedtime/1000);
    //     let minutes = Math.floor( updatedval / 60); 
    //     let seconds = Math.floor(updatedval % 60); 
    //     let timeval = `${minutes} :`;
    //     if(seconds < 10)
    //     {
    //       timeval += '0' + seconds ; 
    //     }
    //     else{
      //       timeval += seconds ;
      //     }
      //     timespan.innerHTML = timeval;
      //   }
      // }
      
          // setInterval(updatetime,1000);

    editBtn.addEventListener("click",function(){
    console.log("see here");
    // todohead.setAttribute("contenteditable","true");
    if(checkval.checked){
      alert("Completed tasks cannot be modified!!");
    }
    else{
      let change = prompt("Enter Your Changes....");
      if(change == "")
      {
        alert("input invalid!!");
      }
      else{
        todohead.innerText = change;
      }
    }
        })
        
        
    delBtn.addEventListener("click",function(){
    li.remove();
        })
        
      }
  })

 
  


















































































// when i write this i found this type of error i can't solve it  error is 
// script.js:123 Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
    // at HTMLDocument.<anonymous> 


    // the code is below 


    // addBtn.addEventListener("click",function(){
    //   let todoval = todoinput.value;
    //   if(todoval == ""){
    //    alert("input invalid !!!")
    //   }
    //   else{
    //    todobox.innerHTML += `
    //                       <li>
    //                          <input type="checkbox" class="todo-checkbox">
    //                          <h2 class="todo-input-head">${todoval}</h2>
    //                          <button class="edit-btn">
    //                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(94,94,94,1)"><path d="M5 18.89H6.41421L15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89ZM21 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L9.24264 18.89H21V20.89ZM15.7279 6.74785L17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785Z"></path></svg>
    //                          </button>
    //                          <button class="del-btn">
    //                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(94,94,94,1)"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>
    //                          </button> 
    //                      </li>
    //  `
    //        todoinput.value = ""; 
    //   }
    //  })

    //    editBtn.addEventListener("click",function(){
    //      console.log("see here");
    //     let change = prompt("Enter Your Changes....");
    //    todohead.innerHTML = change.value;
    //  })
  
    //  delBtn.addEventListener("click",function(){
    //  todobox.remove(li);
    //  })
     