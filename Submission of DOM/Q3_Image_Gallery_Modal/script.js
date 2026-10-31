const gallery = document.querySelector("#gallery");
const modal = document.querySelector("#modal");
const modalContent = document.querySelector("#modalContent");
const previewImage = document.querySelector("#previewImage");
const closeButton = document.querySelector("#closeButton");

gallery.addEventListener("click", (event) => {
  if (event.target.tagName !== "IMG") return;

  previewImage.src = event.target.src.replace("w=500", "w=1400");
  previewImage.alt = event.target.alt;
  modal.hidden = false;
});

function closeModal() {
  modal.hidden = true;
  previewImage.src = "";
}

// Clicking the dark backdrop closes the modal.
modal.addEventListener("click", closeModal);

// Stop the click from bubbling to the backdrop when the image panel is clicked.
modalContent.addEventListener("click", (event) => {
  event.stopPropagation();
});

closeButton.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) closeModal();
});
