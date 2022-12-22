

const menu = document.getElementById("menu-hamburguesa");
const menuItems = Array.from(
  document.getElementById("menu-hamburguesa__items").children
);

const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");

function close() {
  menu.classList.remove("menu-hamburguesa--show");
}

openMenu.addEventListener("click", () => {
  menu.classList.add("menu-hamburguesa--show");
});

closeMenu.addEventListener("click", close);

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    const link = item.firstChild.getAttribute("href");
    window.location.assign(link);
    close();
  });
});



const scrollTopIcon = document.getElementById("scroll-top");

function scrollTop() {
 

  if (window.scrollY >= 560) {
    scrollTopIcon.classList.add("show-scroll-top");
  } else {
    scrollTopIcon.classList.remove("show-scroll-top");
  }
}

window.addEventListener("scroll", scrollTop);



const overlay = document.getElementById("overlay");
const imgs = document.querySelectorAll(".gallery__item");

overlay.addEventListener("click", () => {
  overlay.classList.remove("overlay");

  while (overlay.lastChild) {
    overlay.removeChild(overlay.lastChild);
  }

  window.addEventListener("scroll", scrollTop);
});

imgs.forEach((img) => {
  img.addEventListener("click", () => {
    if (scrollTopIcon.classList.contains("show-scroll-top")) {
      scrollTopIcon.classList.remove("show-scroll-top");
    }

    window.removeEventListener("scroll", scrollTop);

    const cloneImg = img.cloneNode(true);

    cloneImg.classList.add("show-image");
    overlay.classList.add("overlay");

    overlay.appendChild(cloneImg);
  });
});



const inputs = document.querySelectorAll(".contact__form-input");
const submitButton = document.getElementById("contact__form-submit");

const values = {};

inputs.forEach((input, index) => {

  values[index] = input.value;


  input.addEventListener("input", () => {
    values[index] = input.value;
    const isValid = Object.values(values).every((value) => value);
    if (isValid) {
      submitButton.disabled = false;
    } else {
      submitButton.setAttribute("disabled", "");
    }
  });
});
const sr = ScrollReveal({
  origin: "bottom",
  distance: "30px",
  duration: 1000,
  reset: true,
});

sr.reveal(
  `.presentation__description-container, .gallery__item, .info__item-container`,
  {}
);
