window.addEventListener("DOMContentLoaded", function () {
  // MODAL
  let openMenu = document.querySelectorAll("[data-open]");
  closeMenu = document.querySelector("[data-close]");
  modalBg = document.querySelector(".modal_bg");
  modalContent = document.querySelector(".modal_content");

  openMenu.forEach((btn) => {
    btn.addEventListener("click", () => {
      modalContent.style.display = "block";
      modalContent.style.marginTop = "250px";
      modalBg.style.display = "flex";
      modalBg.style.zIndex = "2000";

      setTimeout(() => {
        modalContent.style.opacity = "1";
        modalContent.style.marginTop = "0px";
        modalBg.style.opacity = "1";
      }, 200);
    });
    function closeModal() {
      modalContent.style.opacity = "0";
      modalContent.style.marginTop = "250px";
      modalBg.style.opacity = "0";
      setTimeout(() => {
        modalContent.style.display = "none";
        modalContent.style.marginTop = "0px";
        modalBg.style.display = "none";
      }, 200);
    }
    closeMenu.addEventListener("click", closeModal);

    modalBg.addEventListener("click", (e) => {
      if (e.target === modalBg) {
        closeModal();
      }
    });
  });
  // MODAL

  // SLIDER
  const slides = document.querySelectorAll(".slider");
  prev = document.querySelector(".slider_prev");
  next = document.querySelector(".slider_next");
  sliderWrapper = document.querySelector(".slider_wrapper");
  sliderField = document.querySelector(".slider_inner");
  width = window.getComputedStyle(sliderWrapper).width;

  // let slideIndex = 1;
  let offset = 0;

  sliderField.style.width = 100 * slides.length + "%";
  sliderField.style.display = "flex";
  sliderField.style.transition = "0.5s ease";
  sliderWrapper.style.overflow = "hidden";

  slides.forEach((slide) => {
    slide.style.width = width;
  });

  next.addEventListener("click", () => {
    if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += +width.slice(0, width.length - 2);
    }
    sliderField.style.transform = `translateX(-${offset}px)`;
  });
  prev.addEventListener("click", () => {
    if (offset == 0) {
      offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    } else {
      offset -= +width.slice(0, width.length - 2);
    }
    sliderField.style.transform = `translateX(-${offset}px)`;
  });
});
