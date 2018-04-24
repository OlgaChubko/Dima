// NAVIGATION OF PAGE --- NAVIGATION OF PAGE --- NAVIGATION OF PAGE ---
// NAVIGATION OF PAGE ---
$(document).ready(function () {
    $("#menu").on("click", "a", function (event) {

        event.preventDefault();

        var id = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1000);
    });
});
// NAVIGATION OF PAGE --- NAVIGATION OF PAGE --- NAVIGATION OF PAGE ---
// NAVIGATION OF PAGE ---

// SANDWICH MENU --- SANDWICH MENU --- SANDWICH MENU --- SANDWICH MENU ---
// SANDWICH MENU ---
$(document).ready(function () {
    $('.menu_trigger').click(function () {
        $('nav ul').slideToggle(500);
    });
    $(window).resize(function () {
        if ($(window).width() > 500) {
            $('nav ul').removeAttr('style');
        }
    });
});
// SANDWICH MENU --- SANDWICH MENU --- SANDWICH MENU --- SANDWICH MENU ---
// SANDWICH MENU ---

// MAP ---MAP --- MAP --- MAP ---MAP --- MAP ---MAP --- MAP ---MAP --- MAP ---
// MAP --- MAP ---
var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 20.307981,
            lng: 19.656908
        },
        zoom: 15,
        disableDefaultUI: true
    });

    var marker = new google.maps.Marker({
        position: {
             lat: 20.307981,
            lng: 19.656908
        },

        map: map,
        title: '',
        icon: ''
    });
}

// MAP ---MAP --- MAP --- MAP ---MAP --- MAP ---MAP --- MAP ---MAP --- MAP ---
// MAP --- MAP ---

// BUTTON TOP --- BUTTON TOP --- BUTTON TOP --- BUTTON TOP --- BUTTON TOP ---
// BUTTON TOP ---
$(document).ready(function () {

    $("#back-top").hide();

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
});

// BUTTON TOP --- BUTTON TOP --- BUTTON TOP --- BUTTON TOP --- BUTTON TOP ---
// BUTTON TOP ---

// SERVICES --- SERVICES --- SERVICES --- SERVICES --- SERVICES --- SERVICES ---
// SERVICES ---
$(document).ready(function () {
    if (($(window).width()) > 663) {
        toDoSlider('.slider2');

    }

    function toDoSlider(selector) {

        var slider = $(selector).eq(0);
        slider.css({'position': 'relative', 'width': '100%', 'overflow': 'hidden'});

        var sliderMy = document.createDocumentFragment();

        var sliderTrack = document.createElement('div');
        $(sliderTrack).addClass('slider__track');

        var slides = slider.find('>div');

        if (slides.length > 3) {
            slides = slides.slice(0, 3);
        }

        slides.each(function (index, domElement) {
            $(domElement).addClass('slider__slide slider__slide--center');
        });

        var maxHeightSlide = 0;

        slides.each(function (index, domElement) {
            var heightSlide = $(domElement).height();
            maxHeightSlide = (heightSlide < maxHeightSlide) ? maxHeightSlide : heightSlide;
        });

        maxHeightSlide = Math.ceil(maxHeightSlide);

        $(sliderTrack).css({"height": maxHeightSlide + "px"});

        slides.each(function (index, domElement) {
            $(domElement).css({"height": '100%'})
        });

        // каждому из слайдов назначить классы левого, центрального и правого
        // слайдов
        slides.each(function (index, domElement) {
            switch (index) {
                case 0:
                    $(domElement)
                        .removeClass('slider__slide--center')
                        .addClass('slider__slide--left');
                    break;
                case 1:
                    break;
                case 2:
                    $(domElement)
                        .removeClass('slider__slide--center')
                        .addClass('slider__slide--right');
                    break;
                default:
                    break;
            }
        });

        slides.each(function (index, domElement) {
            sliderTrack.appendChild(domElement);
        });

        sliderMy.appendChild(sliderTrack);

        slider.get(0).appendChild(sliderMy);


        // крутим влево
        function toSwipeLeft() {

            var slideLeft = slider.find('.slider__slide--left').eq(0);
            var slideCenter = slider.find('.slider__slide--center').eq(0);
            var slideRight = slider.find('.slider__slide--right').eq(0);

            slideLeft.removeClass('slider__slide--left').addClass('slider__slide--right');
            slideCenter.removeClass('slider__slide--center').addClass('slider__slide--left');
            slideRight.removeClass('slider__slide--right').addClass('slider__slide--center');

        }

        // крутим вправо
        function toSwipeRight() {

            var slideLeft = slider.find('.slider__slide--left').eq(0);
            var slideCenter = slider.find('.slider__slide--center').eq(0);
            var slideRight = slider.find('.slider__slide--right').eq(0);

            slideLeft.removeClass('slider__slide--left').addClass('slider__slide--center');
            slideCenter.removeClass('slider__slide--center').addClass('slider__slide--right');
            slideRight.removeClass('slider__slide--right').addClass('slider__slide--left');
        }


        // Определить какие картинка правильно нажимаются и связать их с
        // функциями прокрутки

        slider.on('click', '.slider__slide', function (event) {

            if ($(this).hasClass('slider__slide--left')) {
                // если левая картника, вызываем функцию прокрутки влево
                toSwipeLeft();
            } else if ($(this).hasClass('slider__slide--right')) {
                // если правая картника, вызываем функцию прокрутки вправо
                toSwipeRight();
            } else {
                // иначе ничего больше не нужно
                return;
            }

        })

    }
});

// SERVICES --- SERVICES --- SERVICES --- SERVICES --- SERVICES --- SERVICES ---
// SERVICES ---

