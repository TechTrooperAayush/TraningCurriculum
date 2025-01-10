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
let storedusers = [];

console.log(storedusers);

function signupdata() {
  let signupName = signName.value;
  let signupEmail = signEmail.value;
  let signupPassword = signPassword.value;

  let users = {
    name: signupName,
    email: signupEmail,
    password: signupPassword,
  };
  console.log(users, "users");

  storedusers = [...storedusers, users];

  localStorage.setItem("signupinfo", JSON.stringify(storedusers));
  signName.value = "";
  signEmail.value = "";
  signPassword.value = "";
}

function loginPage(event) {
  // console.log(event);
  heroSection.style.display = "none";
  signupSection.style.display = "none";
  loginSection.style.display = "flex";
}

function Backhome() {
  loginSection.style.display = "none";
  heroSection.style.display = "flex";
}

function signup() {
  loginSection.style.display = "none";
  signupSection.style.display = "flex";
}

function Todopage() {
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
      
    } else {
      console.log("Not working");
      logemail.value = "";
      logPassword.value = "";
    }
  });
  //    console.log(user.email);
  //    console.log(userDetails)
}

signupForm.addEventListener("submit", signupdata);
loginForm.addEventListener("submit", Todopage);
