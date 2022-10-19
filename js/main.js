let TS_wrapper = document.getElementById('tranding-slider-wrapper');
let tranding_slide = document.getElementsByClassName('tranding-slide');

let btn_tranding_prev = document.getElementById('btn-prev-tranding');
let btn_tranding_next = document.getElementById('btn-next-tranding');


btn_tranding_next.addEventListener('click', function () {
    TS_wrapper.append(tranding_slide[0]);
});
btn_tranding_prev.addEventListener('click', function () {
    TS_wrapper.prepend(tranding_slide[tranding_slide.length - 1]);
});

// var swiper = new Swiper(".mySwiper", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });

// --------------------------------------- JS OF coupon ------------------------
function loadCoupon() {
    document.getElementById('coupon-wrapper').style.visibility = 'visible';
}
function closeCoupon() {
    document.getElementById('coupon-wrapper').style.visibility = 'hidden';
}

// ----------------------------- light mood Dark mood ------------------------------------------
let mode_icon_btn = document.getElementById('mode-icon-btn');
let mybody = document.querySelector('body');
// let header_link = document.getElementById('header-link');
let footer_wrapper = document.querySelector('.footer-wrapper');


let mode_status = false;
function changeMode() {
    // mode_icon_btn.style.display = 'no?ne';
    mybody.classList.toggle('myDark');
    if (mode_status == false) {
        mode_icon_btn.innerHTML = '<span class="material-symbols-outlined">light_mode</span>';
        mode_icon_btn.style.background = 'white';
        mode_icon_btn.style.color = 'black';
        // header_link.style.color = 'white';
        footer_wrapper.style.backgrond = 'black';
        mode_status = true;
    } else {
        mode_icon_btn.innerHTML = '<span class="material-symbols-outlined">dark_mode</span>';
        mode_icon_btn.style.background = 'black';
        mode_icon_btn.style.color = 'white';
        // header_link.style.color = 'black';
        footer_wrapper.style.backgrond = '#f3f7fb';
        mode_status = false;
    }
    // mode_icon_btn.innerHTML = '<span class="material-symbols-outlined">light_mode</span>';
};


/*dark_mode*/
// let dark_mode_status = false;
// dark_mode_btn.addEventListener('click', function () {
//     body.classList.toggle('dark_mode_active');
//     if (dark_mode_status == false) {
//         this.innerHTML = '<i class="fa-sharp fa-solid fa-sun" aria-hidden="true">';
//         dark_mode_status = true;
//     } else {
//         this.innerHTML = '<i class="fa-solid fa-moon" aria-hidden="true"></i>';
//         dark_mode_status = false;
//     }
// });





