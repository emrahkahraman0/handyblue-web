//JS

//Lazy-Load
var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazyload"
});

//Menu
$(function () {
    $('.hamburger').on('click', function () {
        $('.toggle').toggleClass('open');
        $('.menu').toggleClass('open');
    });
});

//Menu-Scroll
$(window).scroll(function() {
    if($(document).scrollTop() > 0) {
        $('#header').addClass('fixed');
    } else {
        $('#header').removeClass('fixed')
    }
});

//Home_Slider_Owl
$('.home_slider_owl').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:true,
    autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

//Brand_Services_Owl
$('.home_services_owl').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots:false,
    autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        300:{
            items:1
        },
        600:{
            items:2
        },
        800:{
            items:2
        },
        1000:{
            items:3
        },
        1200:{
            items:4
        },
        1400:{
            items:4
        },
        1600:{
            items:4
        },
    }
});

//Brand_Projects_Owl
$('.home_projects_owl').owlCarousel({
    loop:true,
    margin:25,
    nav:false,
    dots:true,
    autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        300:{
            items:1
        },
        600:{
            items:2
        },
        800:{
            items:2
        },
        1000:{
            items:3
        },
        1200:{
            items:3
        },
        1400:{
            items:3
        },
        1600:{
            items:3
        },
    }
});

//Brand_Blog_Owl
$('.home_blog_owl').owlCarousel({
    loop:true,
    margin:25,
    nav:false,
    dots:true,
    autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        300:{
            items:1
        },
        600:{
            items:2
        },
        800:{
            items:2
        },
        1000:{
            items:3
        },
        1200:{
            items:3
        },
        1400:{
            items:3
        },
        1600:{
            items:3
        },
    }
});

//Brand_Partners_Owl
$('.brand_partners_owl').owlCarousel({
    loop:true,
    margin:130,
    nav:false,
    dots:false,
    autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        300:{
            items:1
        },
        600:{
            items:2
        },
        800:{
            items:3
        },
        1000:{
            items:3
        },
        1200:{
            items:4
        },
        1400:{
            items:4
        },
        1600:{
            items:4
        },
    }
});

//About_Counter
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

//About_Clients_Owl
$('.about_clients_owl').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots:true,
    autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        300:{
            items:1
        },
        600:{
            items:1
        },
        800:{
            items:2
        },
        1000:{
            items:3
        },
        1200:{
            items:3
        },
        1400:{
            items:3
        },
        1600:{
            items:3
        },
    }
});

//Projects_Tab
$(".projects_tab").pTab({
    pTab: '.tab-list',
    pTabElem: 'li',
    pContent: '.tab-content',
    pDuration : 500,
	pEffect : 'show',
    pClass : 'aktif'
});

//Faq_Accordion
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));