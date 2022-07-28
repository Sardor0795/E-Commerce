const elCartInner = document.querySelector(".cart__inner");
const elCartBtn = document.querySelector(".cart__btn");

elCartBtn.addEventListener("click", function () {
  elCartInner.classList.toggle("open");
});
