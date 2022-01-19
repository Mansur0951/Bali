const swiper = new Swiper('.swiper', {

  autoplay: true,

  grabCursor: true,
  spaceBetween: 30,
  slidesPerView: 1,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar'
  }

});