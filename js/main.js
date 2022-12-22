// MENU HAMBURGUESA

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

// SCROLL TO TOP

const scrollTopIcon = document.getElementById("scroll-top");

function scrollTop() {
  // WINDOW.SCROLLY ES LA CANTIDAD DE SCROLL VERTICAL (Y) QUE HIZO EL USUARIO

  if (window.scrollY >= 560) {
    scrollTopIcon.classList.add("show-scroll-top");
  } else {
    scrollTopIcon.classList.remove("show-scroll-top");
  }
}

window.addEventListener("scroll", scrollTop);

// GALLERY

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

// SUBMIT FORM

const inputs = document.querySelectorAll(".contact__form-input");
const submitButton = document.getElementById("contact__form-submit");

const values = {};

inputs.forEach((input, index) => {
  //AGREGA UNA PROPIEDAD AL OBJETO { 1: "" }
  values[index] = input.value;

  // LE AGREGAMOS A TODOS LOS INPUT UN EVENTO INPUT QUE SE EJECUTA CADA VEZ QUE CAMBIA EL VALUE DE ESE INPUT
  input.addEventListener("input", () => {
    // ACTUALIZAMOS ESA PROPIEDAD DEL OBJETO CON EL VALOR ACTUAL DEL INPUT
    values[index] = input.value;

    // PREGUNTAMOS SI SON TODOS (EVERY) LOS VALORES DEL OBJETO (OBJECT.VALUES) SON VERDADEROS

    //RECORDATORIO => UN STRING VACÍO SIEMPRE ES FALSO
    const isValid = Object.values(values).every((value) => value);

    //SI ES VALIDO, SETEAMOS LA PROPIEDAD DISABLED DEL BOTÓN A FALSE
    if (isValid) {
      submitButton.disabled = false;
    } else {
      submitButton.setAttribute("disabled", "");
    }
  });
});

//Scroll Reveal Animation

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
