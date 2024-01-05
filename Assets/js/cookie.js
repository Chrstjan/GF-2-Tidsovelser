const cookieContainer = document.getElementById("cookie-container");

const domBody = document.body;

const allBtn = document.querySelector(".cookie-all");
const selectedBtn = document.querySelector(".cookie-selected");

const promCheckbox = document.getElementById("prom");
const statCheckbox = document.getElementById("stat");
const funcCheckbox = document.getElementById("func");

allBtn.addEventListener("click", () => {
  promCheckbox.checked = true;
  statCheckbox.checked = true;
  funcCheckbox.checked = true;

  removePopUp();
});

selectedBtn.addEventListener("click", () => {
  removePopUp();
});

window.addEventListener("load", () => {
  domBody.classList.add("dom-noscroll");
});

const removePopUp = () => {
  if (promCheckbox.checked || statCheckbox.checked || funcCheckbox.checked) {
    domBody.classList.remove("dom-noscroll");
    cookieContainer.remove();
  } else {
    alert("Du skal vælge en!");
  }
};
