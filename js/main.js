const burger = document.querySelector('.hamburger')
const nav = document.querySelector('nav.mobile-ul');

function burgerActive(){
  burger.addEventListener('click',()=>{
    burger.classList.toggle('is-active');
  });
}

function showNav(){
  burger.addEventListener('click', ()=>{
    nav.classList.toggle('show-nav');
  });
}


const swiper = new Swiper('.swiper', {
  // Default parameters
  slidesPerView: 3,
  loop: true,
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  autoplay: {
    delay: 2000,
    pauseOnMouseEnter:true,
    disableOnInteraction:false,
  },
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    998: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});





function initApps(){
  burgerActive();
  showNav();
}

initApps();
 


 



