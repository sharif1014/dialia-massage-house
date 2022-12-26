$(document).ready(function () {
    /* Owl carousel functionality*/ 
    $('.testimonial-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay:true,
        responsive: {
           0: {
                items:1
            },
            768: {
                items:1
            },
            1000: {
                items:2
            }
           
        }
    })
    $('.product-list').owlCarousel({
        loop: true,
        margin: 10,
        autoplay:true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items:4
            }
           
        }
    })
    
    /* Team member slider functionality*/ 
    const left = $("#left");
    const right = $("#right");
    const members = document.querySelectorAll('.member');
    const slide_member = Math.ceil(members.length / 4);
    let l = 0;
    let movePer = 108;
    let maxMove = 500;
    // mobile_view
    let tab_view = window.matchMedia('(max-width: 768px)');
    let mob_view = window.matchMedia('(max-width: 390px)');
    
    if (tab_view.matches) {
        movePer = 106;
        maxMove = 712;
    }
    if (mob_view.matches) {
        movePer = 106;
        maxMove = 800;
    }
    
    left.click( () => {
        l = l - movePer;
        if (l <= 0) {
            l = 0;
        }
        for (let i of members) {
            if (slide_member > 1) {
                i.style.transform = `translateX(-${l}%)`;
               
            }
        }
    })
    right.click( () => {
        l = l + movePer;
        if (members == 1) {
            l = 0;
        }
        for (const i of members) {
            if (l > maxMove) {
                l = l - movePer;
            }
            i.style.transform = `translateX(-${l}%)`;
        }
    })

    $(window).resize(function () {
        if ($(window).width() <= 768) {
          $(".member").css({width:"50%"});
        }  else if ($(window).width() <= 400){
            $(".member").css({width:"100%"});
        }
        else {
            $(".member").css({width:"25%"});  
        }
      });
    
  });