const email = document.querySelector("#email");
const password = document.querySelector("#password");
const login = document.querySelector("#login");
const wrong = document.querySelector(".wrong");
import { path } from "path.js";

let userExist = false;
if (!localStorage.getItem("users"))
  localStorage.setItem("users", JSON.stringify([]));

const users = JSON.parse(localStorage.getItem("users"));
login.addEventListener("click", () => {
  if (!email.value || !password.value) {
    wrong.innerHTML = "please write your email and password";
    wrong.classList.replace("d-none", "d-block");
    return;
  }
  users.forEach((user) => {
    if (user.email === email.value) {
      userExist = true;
      if (user.password === password.value) {
        user.loggedIn = true;
        wrong.classList.replace("d-block", "d-none");
        localStorage.setItem("users", JSON.stringify(users));
        location.replace(path + "home.html");
      } else {
        wrong.innerHTML = "make sure to enter the right Password and Email";
        wrong.classList.replace("d-none", "d-block");
      }
    }
  });
  if (!userExist) {
    wrong.innerHTML = "User does not exist";
    wrong.classList.replace("d-none", "d-block");
  }
});

email.addEventListener("input", () => {
  wrong.classList.replace("d-block", "d-none");
});

password.addEventListener("input", () => {
  wrong.classList.replace("d-block", "d-none");
});
