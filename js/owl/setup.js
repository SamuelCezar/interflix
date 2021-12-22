$('.owl-carousel').owlCarousel({
    loop:true,
    margin:13,
    video:true,
    videoWidth: false,
    videoHeight: false,
    center: true,
    merge:false,
    nav:true,
    lazyLoad: true,
    items:1,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:8
        }
    }
})