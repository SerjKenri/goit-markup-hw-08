(() => {
  const refs = {
    openMobileMenuBtn: document.querySelector("[data-mobile-open]"),
    closeMobileMenuBtn: document.querySelector("[data-mobile-close]"),
    mobileMenu: document.querySelector("[data-mobile]"),
  };

  refs.openMobileMenuBtn.addEventListener("click", toggleMobileMenu);
  refs.closeMobileMenuBtn.addEventListener("click", toggleMobileMenu);

  function toggleMobileMenu() {
    refs.mobileMenu.classList.toggle("hidden");
  }
})();