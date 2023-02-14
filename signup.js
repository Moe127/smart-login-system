const userName = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const signup = document.querySelector("#signup");
const wrong = document.querySelector(".wrong");
import { path } from "./path";

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const users = JSON.parse(localStorage.getItem("users"));

signup.addEventListener("click", () => {
  let validPass = passwordRegex.test(password.value);
  let validEmail = emailRegex.test(email.value);
  if (!userName.value || !email.value || !password.value) {
    wrong.innerHTML = "All inputs required";
    wrong.classList.replace("d-none", "d-block");
    return;
  }
  let userExist = false;
  users.forEach((user) => {
    if (user.email === email.value) {
      wrong.classList.replace("d-none", "d-block");
      wrong.innerHTML = "user already exist";
      userExist = true;
      return;
    }
  });
  if (!validPass) {
    console.log(password.value);
    wrong.innerHTML = "invalid password";
    wrong.classList.replace("d-none", "d-block");
    return;
  }
  if (!validEmail) {
    wrong.innerHTML = "invalid email";
    wrong.classList.replace("d-none", "d-block");
    return;
  }
  if (!userExist) {
    const user = {
      userName: userName.value,
      email: email.value,
      password: password.value,
      loggedIn: false,
    };
    wrong.classList.replace("d-block", "d-none");
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    location.replace(path + "index.html");
  }
});
userName.addEventListener("input", () => {
  wrong.classList.replace("d-block", "d-none");
});

email.addEventListener("input", () => {
  wrong.classList.replace("d-block", "d-none");
});

password.addEventListener("input", () => {
  wrong.classList.replace("d-block", "d-none");
});
