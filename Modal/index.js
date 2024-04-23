const openModalButton = document.querySelector("#openModalButton");
const modal = document.querySelector("#newModal");
const closeModalButton = document.querySelector("#closeModalButton");

openModalButton.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModalButton.addEventListener("click", () => {
  modal.style.animationName = "fadeOut";
  modal.style.animationDuration = "0.3s";
  setTimeout(() => {
    modal.style.display = "none";
    modal.style.animationName = "";
  }, 300);
});

closeModalButton.textContent = "Закрой, больно смотреть ";

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
