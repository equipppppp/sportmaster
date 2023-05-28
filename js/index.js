// слайдеры

const swiper = new Swiper(".experts__swiper", {
  speed: 500,
  spaceBetween: 18,
  slidesPerView: "auto",
  loop: false,
  pagination: {
    el: ".swiper-pagination",
  },
});

const brandsSwiper = new Swiper(".brands__swiper", {
  speed: 500,
  loop: false,
  slidesPerView: "auto",
  spaceBetween: 35,
});

const articlesSwiper = new Swiper(".articles__swiper", {
  speed: 500,
  loop: false,
  slidesPerView: "auto",
  spaceBetween: 8,
});

// замена текста на троеточие

const gloves = document.querySelector("#gloves");
const inventory = document.querySelector("#inventory");

function changeLastElement() {
  if (Number(gloves.clientWidth) < 263) {
    gloves.children[gloves.children.length - 1].innerText = "...";
  } else {
    gloves.children[gloves.children.length - 1].innerText = "Гейторы";
  }
  if (Number(inventory.clientWidth) < 255) {
    inventory.children[inventory.children.length - 1].innerText = "...";
  } else {
    inventory.children[inventory.children.length - 1].innerText = "Конусы";
  }
}
document.addEventListener("DOMContentLoaded", () => {
  changeLastElement();
});
window.addEventListener("resize", () => {
  changeLastElement();
});

// смена фонового изображения

const proButtons = document.querySelector("#proButtons");
const proIMG = document.querySelector("#proIMG");

proButtons.addEventListener("mouseover", (event) => {
  proIMG.classList.add(`${event.target.dataset.name}`);
});
proButtons.addEventListener("mouseout", (event) => {
  proIMG.classList.remove(`${event.target.dataset.name}`);
});

const serviceButtons = document.querySelector("#serviceButtons");
const serviceIMG = document.querySelector("#serviceIMG");

serviceButtons.addEventListener("mouseover", (event) => {
  serviceIMG.classList.add(`${event.target.dataset.name}`);
});
serviceButtons.addEventListener("mouseout", (event) => {
  serviceIMG.classList.remove(`${event.target.dataset.name}`);
});

// кнопка play

const play = document.querySelector(".playButton");
const video = document.querySelector(".video");

play.addEventListener("click", () => {
  play.classList.toggle("hidden");
  video.setAttribute("controls", "controls");
  video.play();
});

video.addEventListener("ended", function () {
  this.src = this.src;
  play.classList.toggle("hidden");
  video.removeAttribute("controls");
});
