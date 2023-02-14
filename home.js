const logout = document.querySelector("#logout");
const welcome = document.querySelector(".welcome");
import { path } from "path.js";

let authenticate = false;

const users = JSON.parse(localStorage.getItem("users"));

users.forEach((user) => {
  if (user.loggedIn) {
    authenticate = true;
    return;
  }
});
if (!authenticate) location.replace(path + "index.html");

logout.addEventListener("click", () => {
  users.forEach((user) => {
    if (user.loggedIn) {
      user.loggedIn = false;
      localStorage.setItem("users", JSON.stringify(users));
      location.replace(path + "index.html");
    }
  });
});

users.forEach((user) => {
  if (user.loggedIn) {
    welcome.innerHTML = `Welcome ${user.userName}`;
  }
});
