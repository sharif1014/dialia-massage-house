$(document).ready(function () {
    
    const left = $("#left");
    const right = $("#right");
    const sliderItems = document.querySelectorAll('.slider-item');
    const slide_item = Math.ceil(sliderItems.length / 4);
    let l = 0;
    let movePer = 106;
    let maxMove = 500;
    // mobile_view
    let tab_view = window.matchMedia('(max-width: 768px)');
    let mob_view = window.matchMedia('(max-width: 390px)');
    
    if (tab_view.matches) {
        movePer = 106;
        maxMove = 612;
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
        for (let i of sliderItems) {
            if (slide_item > 1) {
                i.style.transform = `translateX(-${l}%)`;
               
            }
        }
    })
    right.click( () => {
        l = l + movePer;
        if (sliderItems == 1) {
            l = 0;
        }
        for (const i of sliderItems) {
            if (l > maxMove) {
                l = l - movePer;
            }
            i.style.transform = `translateX(-${l}%)`;
        }
    })
    
    })