(() => {
  let grantsSwiper = null;
  const DESKTOP_MQ = "(min-width: 1920px)";

  function createGrantsSwiper() {
    grantsSwiper = new Swiper("#grants-swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      loop: false,
      watchOverflow: true,
    });
  }

  function destroyGrantsSwiper() {
    if (grantsSwiper && !grantsSwiper.destroyed) {
      grantsSwiper.destroy(true, true);
      grantsSwiper = null;
    }
  }

  function initMobileSliders() {
    const mq = window.matchMedia(DESKTOP_MQ);

    const handler = (e) => {
      if (e.matches) {
        destroyGrantsSwiper();
      } else if (!grantsSwiper) {
        createGrantsSwiper();
      }
    };

    handler(mq);
    mq.addEventListener("change", handler);
  }

  window.FTSlider = { initMobileSliders };
})();
