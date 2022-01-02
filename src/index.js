console.log("test")

const title1 = document.getElementById("title");
console.log(title1);

const title2 = document.querySelector("#title");
console.log(title2);

const divEl = document.querySelector(".container");

const btnEl = document.createElement("button");
btnEl.textContent = "ボタン"

divEl.appendChild(btnEl);
