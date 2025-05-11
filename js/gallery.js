import images from './data.js';

const galleryEl = document.querySelector(".gallery");

images.forEach(({ preview, original, description }) => {
  galleryEl.insertAdjacentHTML(
    "beforeend",
    `<li class="gallery-item">
      <a class="gallery-link" href="${original}" onClick="event.preventDefault()">
        <img
          class="gallery-image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`
  );
});

function handleImgClick({ target }) {
  if (target.nodeName !== "IMG") {
    return;
  }

  const imageUrl = target.dataset.source;
  const imageAlt = target.alt;

  const instance = basicLightbox.create(
    `<img class="modal-image" src="${imageUrl}" alt="${imageAlt}" />`,
    { className: "modal" }
  );
  instance.show();
}

galleryEl.addEventListener("click", handleImgClick);