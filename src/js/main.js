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
