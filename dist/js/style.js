var lazyLoadInstance=new LazyLoad({elements_selector:".lazyload"});$((function(){$(".hamburger").on("click",(function(){$(".toggle").toggleClass("open"),$(".menu").toggleClass("open")}))})),$(window).scroll((function(){$(document).scrollTop()>0?$("#header").addClass("fixed"):$("#header").removeClass("fixed")})),$(".home_slider_owl").owlCarousel({loop:!0,margin:0,nav:!1,dots:!0,autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,responsive:{0:{items:1},600:{items:1},1e3:{items:1}}}),$(".home_services_owl").owlCarousel({loop:!0,margin:30,nav:!0,dots:!1,autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,responsive:{0:{items:1},300:{items:1},600:{items:2},800:{items:2},1e3:{items:3},1200:{items:4},1400:{items:4},1600:{items:4}}}),$(".home_projects_owl").owlCarousel({loop:!0,margin:25,nav:!1,dots:!0,autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,responsive:{0:{items:1},300:{items:1},600:{items:2},800:{items:2},1e3:{items:3},1200:{items:3},1400:{items:3},1600:{items:3}}}),$(".home_blog_owl").owlCarousel({loop:!0,margin:25,nav:!1,dots:!0,autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,responsive:{0:{items:1},300:{items:1},600:{items:2},800:{items:2},1e3:{items:3},1200:{items:3},1400:{items:3},1600:{items:3}}}),$(".brand_partners_owl").owlCarousel({loop:!0,margin:130,nav:!1,dots:!1,autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,responsive:{0:{items:1},300:{items:1},600:{items:2},800:{items:3},1e3:{items:3},1200:{items:4},1400:{items:4},1600:{items:4}}}),$(".count").each((function(){$(this).prop("Counter",0).animate({Counter:$(this).text()},{duration:4e3,easing:"swing",step:function(e){$(this).text(Math.ceil(e))}})})),$(".about_clients_owl").owlCarousel({loop:!0,margin:20,nav:!1,dots:!0,autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,responsive:{0:{items:1},300:{items:1},600:{items:1},800:{items:2},1e3:{items:3},1200:{items:3},1400:{items:3},1600:{items:3}}}),$(".projects_tab").pTab({pTab:".tab-list",pTabElem:"li",pContent:".tab-content",pDuration:500,pEffect:"show",pClass:"aktif"});const items=document.querySelectorAll(".accordion button");function toggleAccordion(){const e=this.getAttribute("aria-expanded");for(i=0;i<items.length;i++)items[i].setAttribute("aria-expanded","false");"false"==e&&this.setAttribute("aria-expanded","true")}items.forEach((e=>e.addEventListener("click",toggleAccordion)));