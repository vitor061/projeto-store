document.addEventListener("DOMContentLoaded", function () {
    var sliders = document.querySelectorAll(".product-slider");

    sliders.forEach(function (slider) {
        new Swiper(slider, {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            navigation: {
                nextEl: slider.querySelector(".swiper-button-next"),
                prevEl: slider.querySelector(".swiper-button-prev"),
            },
        });
    });
});
