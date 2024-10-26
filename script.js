const menu = document.querySelector(".menu");
const menuBg = document.querySelector(".menuBg");

function abreMenu() {
  menu.classList.add("menuShow");
  menuBg.classList.add("menuShow");
}

function fechaMenu() {
  menu.classList.remove("menuShow");
  menuBg.classList.remove("menuShow");
}

document.querySelector("#abreMenuBt").addEventListener("click", function () {
  abreMenu();
});

document.querySelector(".menuBg").addEventListener("click", function () {
  fechaMenu();
});
