const elCartInner = document.querySelector(".cart__inner");
const elCartBtn = document.querySelector(".cart__btn");

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
    console.log(elBtn.dataset.imgBig);
    console.log(elBigImg.src);
    elBigImg.src = elBtn.dataset.imgBig;
  });
});

// Modal

const elModal = document.querySelector(".modal");
const elModalXBtn = document.querySelector(".modal__x-btn");

elBigImg.addEventListener("click", function () {
  elModal.classList.remove("modal--close");
  elModal.classList.add("modal--open");
});

elModalXBtn.addEventListener("click", function () {
  elModal.classList.remove("modal--open");
  elModal.classList.add("modal--close");
});

// Modal btn

const elsModalBtns = document.querySelectorAll(".js-modal-btn");
const elModalBigImg = document.querySelector(".js-modal-img-big");
const elNext = document.querySelector(".btn--next");
const elPrev = document.querySelector(".btn--prev");

elsModalBtns.forEach(function (elBtn) {
  elBtn.addEventListener("click", function () {
    elsModalBtns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    elBtn.classList.add("active");
    console.log(elBtn.dataset.imgBig);
    console.log(elModalBigImg.src);
    elModalBigImg.src = elBtn.dataset.imgBig;
  });
});

elNext.addEventListener("click", function () {
  elsModalBtns.forEach(function (btn) {
    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
      
    }
  });
});
