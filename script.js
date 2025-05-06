// AOS
AOS.init();

// Mixitup Js
var mixir = mixitup(".pf-container");
window.addEventListener("scroll", () => {
  // mixir.filter("all");
  // console.log(window.scrollY);
  if (window.scrollY >= 2600) {
    mixir.filter("all");
    // console.log(window.scrollY);
  }
});

// Swipper Js
// Swiper Slider
var swiper = new Swiper(".testSwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  speed: 600,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// FAQs
const faqCards = document.querySelectorAll(".faq-card");

faqCards.forEach((card) => {
  card.addEventListener("click", () => {
    faqCards.forEach((item) => {
      if (item !== card) {
        item.classList.remove("faq-active");
      }
    });
    card.classList.toggle("faq-active");
  });
});
