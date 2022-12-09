const icon = document.querySelector(".links");
const menu = document.querySelector("ul");
let line2 = document.querySelector(".icon > span:nth-child(2)");

icon.addEventListener("click", () => {
  if (menu.style.display === "block") {
    menu.style.display = "none";
    line2.style.width = "50%";
  } else {
    menu.style.display = "block";
    line2.style.width = "100%";
  }
});
