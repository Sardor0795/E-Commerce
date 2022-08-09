const elCartInner = document.querySelector(".cart__inner");
const elCartBtn = document.querySelector(".cart__btn");
const elCartCount = document.querySelector(".js-cart-count");

elCartBtn.addEventListener("click", function () {
  elCartInner.classList.toggle("open");
});

// BTN ACTIVE

const elsBtns = document.querySelectorAll(".js-block-btn");
const elBigImg = document.querySelector(".block__img-big");

elsBtns.forEach(function (elBtn) {
  elBtn.addEventListener("click", function () {
    elsBtns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    elBtn.classList.add("active");
    elBigImg.src = elBtn.dataset.imgBig;
  });
});

// Modal

const elModal = document.querySelector(".modal");
const elModalXBtn = document.querySelector(".modal__x-btn");

elBigImg.addEventListener("click", function () {
  elModal.classList.remove("modal--close");
  elModal.classList.add("modal--open");
  document.body.classList.add("scroll-close");
});

elModalXBtn.addEventListener("click", function () {
  elModal.classList.remove("modal--open");
  elModal.classList.add("modal--close");
  document.body.classList.remove("scroll-close");
});

// Modal btn

const elsModalBtns = document.querySelectorAll(".js-modal-btn");
const elModalBigImg = document.querySelector(".js-modal-img-big");
const elNext = document.querySelector(".btn--next");
const elPrev = document.querySelector(".btn--prev");
const elsBlockModalThumbs = document.querySelectorAll(".js-block-modal-thumbs");

elNext.addEventListener("click", function () {
  const modal = document.querySelector(".modal__imgs");
  const active = modal.querySelector(".active");
  active.classList.remove("active");

  if (active.nextElementSibling === null) {
    elsBlockModalThumbs[0].classList.add("active");
  } else {
    active.nextElementSibling.classList.add("active");
  }

  if (active.nextElementSibling === null) {
    elModalBigImg.src = elsBlockModalThumbs[0].dataset.imgBig;
  }
  elModalBigImg.src = active.nextElementSibling.dataset.imgBig;
});

elPrev.addEventListener("click", function () {
  const modal = document.querySelector(".modal__imgs");
  const active = modal.querySelector(".active");
  active.classList.remove("active");
  const prev = elsBlockModalThumbs.length - 1;

  if (active.previousElementSibling === null) {
    elsBlockModalThumbs[prev].classList.add("active");
  } else {
    active.previousElementSibling.classList.add("active");
  }

  if (active.previousElementSibling === null) {
    elModalBigImg.src = elsBlockModalThumbs[prev].dataset.imgBig;
  }
  elModalBigImg.src = active.previousElementSibling.dataset.imgBig;
});

elsModalBtns.forEach(function (elBtn) {
  elBtn.addEventListener("click", function () {
    elsModalBtns.forEach(function (btn) {
      btn.parentElement.classList.remove("active");
    });
    elBtn.parentElement.classList.add("active");
    elModalBigImg.src = elBtn.dataset.imgBig;
  });
});

// Count items

const elDecBtn = document.querySelector(".js-dec-btn");
const elIncBtn = document.querySelector(".js-inc-btn");
const elCountDisplay = document.querySelector(".js-count-display");

elIncBtn.addEventListener("click", function () {
  elCountDisplay.textContent = parseInt(elCountDisplay.textContent, 10) + 1;
  elCartCount.textContent = elCountDisplay.textContent
});

elDecBtn.addEventListener("click", function () {
  if (parseInt(elCountDisplay.textContent, 10) > 0) {
    elCountDisplay.textContent = parseInt(elCountDisplay.textContent, 10) - 1;
    elCartCount.textContent = elCountDisplay.textContent
  }
});
