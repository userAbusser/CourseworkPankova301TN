
//Слайдер для першого блоку
const swiper = new Swiper(".swiper", {
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 2500, //змінюється картинка кожні 3,5 секунди
        disableOnInteraction: false,
    },
});

//Галерея
jQuery(document).ready(($) => {



    $('.museums-item').lightGallery({

    });

});

//Для меню на мобільних пристроях
const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu__list-active');
})


function submitForm(event) {
    event.preventDefault(); // Запобігаємо відправці форми

    // Кодя для обробки форми

    // Відкриваємо нову сторінку
    window.open("confirm.html", "_blank");

    // Перехід на попередню сторінку
    setTimeout(function () {
        window.history.back();
    }, 2000); // Затримка 2 секунди
}