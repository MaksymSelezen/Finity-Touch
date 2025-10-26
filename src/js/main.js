(function () {
  const mm = window.matchMedia("(max-width: 1919px)");
  let swiper;

  function enableSwiper() {
    swiper = new Swiper("#grants-swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: "#grants-swiper .swiper-pagination",
        clickable: true,
      },

      speed: 450,

      watchOverflow: true,
    });
  }

  function destroySwiper() {
    if (swiper && swiper.destroy) {
      swiper.destroy(true, true);
      swiper = null;
    }
  }

  function toggleSwiper(e) {
    if (e.matches) {
      if (!swiper) enableSwiper();
    } else {
      destroySwiper();
    }
  }

  toggleSwiper(mm);

  mm.addEventListener("change", toggleSwiper);
})();

(function () {
  const backdrop = document.querySelector("[data-menu]");
  const openButtons = document.querySelectorAll("[data-menu-open]");
  const closeButton = document.querySelector("[data-menu-close]");

  if (!backdrop || openButtons.length === 0) {
    return;
  }

  const menuLinks = backdrop.querySelectorAll("[data-menu-link]");
  const desktopMediaQuery = window.matchMedia("(min-width: 1920px)");

  const setAriaExpanded = (value) => {
    openButtons.forEach((button) => {
      button.setAttribute("aria-expanded", String(value));
    });
  };

  const openMenu = () => {
    backdrop.classList.add("is-open");
    backdrop.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
    setAriaExpanded(true);
    document.addEventListener("keydown", onEscPress);
  };

  const closeMenu = () => {
    if (!backdrop.classList.contains("is-open")) {
      return;
    }

    backdrop.classList.remove("is-open");
    backdrop.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
    setAriaExpanded(false);
    document.removeEventListener("keydown", onEscPress);
  };

  const toggleMenu = () => {
    if (backdrop.classList.contains("is-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const onEscPress = (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  };

  openButtons.forEach((button) => {
    button.addEventListener("click", toggleMenu);
  });

  closeButton?.addEventListener("click", closeMenu);

  backdrop.addEventListener("click", (event) => {
    if (event.target === event.currentTarget) {
      closeMenu();
    }
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  desktopMediaQuery.addEventListener("change", (event) => {
    if (event.matches) {
      closeMenu();
    }
  });
})();
