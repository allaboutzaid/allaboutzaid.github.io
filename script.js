document.addEventListener("DOMContentLoaded", function () {
    // Simple slider logic
    let currentIndex = 0;
    const slides = document.querySelectorAll(".slide");
    setInterval(() => {
        slides.forEach((slide, index) => {
            slide.style.display = index === currentIndex ? "block" : "none";
        });
        currentIndex = (currentIndex + 1) % slides.length;
    }, 3000);
});

$(document).ready(function () {
    $('.brand-icon-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });
});

window.onscroll = function() {
    const copyrightText = document.getElementsByClassName('scroll-text')[0];
    
    // Ensure the element exists before trying to modify it
    if (copyrightText) {
        if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
            copyrightText.innerHTML = "@hash_tag_zaid";
        } else {
            copyrightText.innerHTML = "Explore";
        }
    }
};


function switchTab(event, className) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
    
    const tabParent = document.getElementById('tab-parent');
    tabParent.className = '';
    tabParent.classList.add(className);
}