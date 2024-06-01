document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'vertical', 
      loop: true,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
  
      // Navigation arrows
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
      autoplay: {
        delay: 5000,
      },
      speed: 2000,
      effect: 'fade',
      fadeEffect: {
            crossFade: true,
       },
    });
  });

