$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    video:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// $('.owl-carousel').owlCarousel({
//     items:1,
//     merge:true,
//     loop:true,
//     margin:10,
//     video:true,
//     lazyLoad:true,
//     center:true,
//     responsive:{
//         480:{
//             items:2
//         },
//         600:{
//             items:4
//         }
//     }
// })