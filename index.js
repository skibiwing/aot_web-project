// Slider Image
document.addEventListener("DOMContentLoaded", initialize_all_sliders);

function initialize_all_sliders() {
    const sliders = document.querySelectorAll(".slider");
    sliders.forEach((slider) => {
        initialize_slider(slider);
    });
    
}



function initialize_slider(slider) {
    const slides = slider.querySelectorAll(".slides img");
    let slide_index = 0;
    const prev_button=slider.querySelector(".prev");
    const next_button=slider.querySelector(".next");
    
    if (slides.length > 0) {
        slides[slide_index].classList.add("display_slide");
    }


    prev_button.addEventListener("click", () => {
        if (slide_index==0){
            slide_index=1;
        }
        show_slide(slider, slides, --slide_index);
    }); 


    next_button.addEventListener("click", () => {
        if(slide_index===slides.length-1){
            slide_index === slides.length-1;
        }
        show_slide(slider, slides, ++slide_index);
        
    });

    
}

function show_slide(slider, slides, index) {

    let slide_index = (index + slides.length) % slides.length;
    
    slides.forEach((slide) => {
        slide.classList.remove("display_slide");
    });

    slides[slide_index].classList.add("display_slide");

    slider.dataset.slideIndex = slide_index;
}


// Dropdown
const dropDown = document.querySelector(".dropdown");
const arrow = document.querySelector(".arrow");
const tableOfContent= document.querySelector(".toc");

clickFunction = arrow.addEventListener("click", function intializeArrow(){
        dropDown.classList.toggle('active');
    }
)

