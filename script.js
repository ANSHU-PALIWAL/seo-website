// animation js
AOS.init(
    {
        offset: 60,
        delay: 800,
        duration: 800,
        easing: 'ease'
    }
);


// back to top
var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});



// preloader js
setTimeout(function () {
    $('.loader_bg').fadeToggle();
}, 1500);




// search icon js
$(document).ready(function () {
    //add active class
    $(".search_icon").click(function () {
        $(".search_screen").addClass("active");
    });

    //remove active class
    $(".close_icon").click(function () {
        $(".search_screen").removeClass("active");
    });

});




// slider 1
$('.my-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})



// counter
$(document).ready(function () {
    $('.counter-value').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 3500,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});



// cursor animation
var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function (e) {
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});


