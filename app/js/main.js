//add_slider_Galery_with_products
$('.products').slick({

    // slidesToShow: 1,
    // slidesToScroll: 1,
    speed: 300,
    infinite: true,
    // centerMode: true,
    // focusOnSelect: true,
    // waitForAnimate: false,
    // responsive: [{
    //         breakpoint: 753,
    //         settings: {
    //             vertical: false,
    //             verticalSwiping: false,
    //             centerMode: false,

    //             speed: 300,
    //             slidesToShow: 2,
    // slidesToScroll: 3,
    // infinite: true,
    // dots: true
    //     }
    // },
    // {
    //     breakpoint: 600,
    //     settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2
    //     }
    // },
    // {
    //     breakpoint: 480,
    //     settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1
    //     }
    // }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    // ]
});

//add__event__to__click__on__button
const Button = document.querySelector(".MainButton");
const PopUP = document.querySelector(".PopUP");
const CloseButton = document.querySelector(".close button");
const Overlay = document.querySelector(".overlay");

Button.addEventListener('click', function(e) {
    PopUP.classList.add('active');
    Overlay.classList.add('active');
});

CloseButton.addEventListener('click', function(e) {
    PopUP.classList.remove('active');
    Overlay.classList.remove('active');
});

Overlay.addEventListener('click', function(e) {
    console.log('dd')
});