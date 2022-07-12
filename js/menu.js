(() => {
  const refs = {
    openMenuBtn: document.querySelector(".mobile-btn"),
    closeMenuBtn: document.querySelector(".close-open-btn"),
    menu: document.querySelector(".mob-menu"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();