const elCartInner = document.querySelector(".cart__inner");
const elCartBtn = document.querySelector(".cart__btn");
const elCartCount = document.querySelector(".js-cart-count");
const elCartCloseWindow = document.querySelector(".cart-closer-window");

elCartBtn.addEventListener("click", function () {
  elCartInner.classList.toggle("open");
  elCartCloseWindow.classList.add("open");
});

// Cart closer window

elCartCloseWindow.addEventListener("click", () => {
  elCartInner.classList.remove("open");
  elCartCloseWindow.classList.remove("open");
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

// Loader

const elLoader = document.querySelector(".loader-wrapper");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    elLoader.classList.add("close");
  }, 800);
});

// Modal menu

const elMenuBtn = document.querySelector(".site-header__menu");
const elCloseBtn = document.querySelector(".nav__close-btn");
const elNav = document.querySelector(".nav");
const elNavCloserWindow = document.querySelector(".nav__window-closer");

elMenuBtn.addEventListener("click", () => {
  elNav.classList.add("open");
});

elCloseBtn.addEventListener("click", () => {
  elNav.classList.remove("open");
});

elNavCloserWindow.onclick = () => {
  elNav.classList.remove("open");
};

// Count items

const elDecBtn = document.querySelector(".js-dec-btn");
const elIncBtn = document.querySelector(".js-inc-btn");
const elCountDisplay = document.querySelector(".js-count-display");
const elAddToCartBtn = document.querySelector(".btns__cart");
const elCalculatedPrice = document.querySelector(".info__price");
const elDellSelected = document.querySelector(".inner__delete");
const elInnerBtn = document.querySelector(".inner__btn");

elIncBtn.addEventListener("click", function () {
  elCountDisplay.textContent = parseInt(elCountDisplay.textContent, 10) + 1;
});

elDecBtn.addEventListener("click", function () {
  if (parseInt(elCountDisplay.textContent, 10) > 0) {
    elCountDisplay.textContent = parseInt(elCountDisplay.textContent, 10) - 1;
  }
});

elAddToCartBtn.onclick = () => {
  elCartCount.textContent = elCountDisplay.textContent;
  let sum = +elCountDisplay.textContent * 125;
  elCalculatedPrice.innerHTML = `$125.00 x ${elCountDisplay.textContent}<span class="bold">$${sum}.00</span>`;
  elCountDisplay.textContent = "0";
  elCartInner.classList.add("open");
  elCartCloseWindow.classList.add("open");
};

elDellSelected.onclick = () => {
  elCalculatedPrice.innerHTML = `$125.00 x ${0}<span class="bold">$${0}.00</span>`;
  elCartCount.textContent = "0";
  elCountDisplay.textContent = "0";
};

elInnerBtn.onclick = () => {
  elCartCount.textContent = "0";
  elCountDisplay.textContent = "0";
  elCartInner.classList.remove("open");
  elCartCloseWindow.classList.remove("open");
  elCalculatedPrice.innerHTML = `$125.00 x ${0}<span class="bold">$${0}.00</span>`;
};
