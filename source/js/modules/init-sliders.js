const sliderWrapers = document.querySelectorAll(`.swiper-wrapper`);
const carouselNavigationModSliders = document.querySelectorAll(`.js-carousel-navigation-mod`);


let swiperList = [];

const storiesModeSettings2 = {
  spaceBetween: 80,
  slidesPerView: 1,
  centeredSlides: true,
  pagination: {
    el: `.js-carousel-navigation-mod-pagination`,
    clickable: true
  },
};


const initSlider = (el, settings) => {
  // eslint-disable-next-line no-undef
  const swiper = new Swiper(el, settings);
  swiperList.push(swiper);
};

const breakpoint = window.matchMedia(`(max-width:1023px)`);

const setSlider = () => {
  swiperList = [];
  if (sliderWrapers.length) {
    if (carouselNavigationModSliders) {
      if (breakpoint.matches === true) {
        Array.prototype.forEach.call(carouselNavigationModSliders, (item) => {
          initSlider(item, storiesModeSettings2);
        });
      }
    }
  }
};

const checkmobileWidth = () => {
  if (breakpoint.matches === true) {
    return true;
  }
  return false;
};

let isMobileWidth = checkmobileWidth();

const resizeSwiper = () => {
  if (checkmobileWidth() !== isMobileWidth) {
    isMobileWidth = !isMobileWidth;

    swiperList.forEach(function (swiper) {
      if (swiper.length) {
        swiper.forEach(function (el) {
          el.destroy();
        });
      } else {
        swiper.destroy();
      }
    });

    swiperList = [];
    setSlider();
  }
};

window.addEventListener(`resize`, resizeSwiper);


export default setSlider;
