import galleryItems from "../js/app.js";

const galery = document.querySelector(".js-gallery");
const listGalary = creatGalaryMarkUp(galleryItems);

galery.innerHTML = listGalary;

function creatGalaryMarkUp(items) {
  return items
    .map(
      (item) => `
         <li class="gallery__item">
      <a
        class="gallery__link"
        href="${item.original}"
      >
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </li> 
        `
    )
    .join("");
}

galery.addEventListener("click", onGallaryListClick);

const lightBox = document.querySelector(".js-lightbox");
const lightBoxImage = document.querySelector(".lightbox__image");

function onGallaryListClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  lightBox.classList.add("is-open");
  lightBoxImage.src = event.target.dataset.source;
  lightBoxImage.alt = event.target.alt;

  window.addEventListener("keydown", onEscClick);
}

const closeBtn = document.querySelector(".lightbox__button");
closeBtn.addEventListener("click", closeLightBox);

const closeOverlay = document.querySelector(".lightbox__overlay");
closeOverlay.addEventListener("click", closeLightBox);

function closeLightBox() {
  lightBox.classList.remove("is-open");
  lightBoxImage.src = "";
  lightBoxImage.alt = "";

  window.removeEventListener("keydown", onEscClick);
}

function onEscClick(event) {
  if (event.code === "Escape") {
    closeLightBox();
  }
}
