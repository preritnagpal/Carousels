const slides = document.querySelectorAll(".mdiv1");
const dots = document.querySelectorAll(".dot");
let counter = 0;
let slideInterval;

slides.forEach((mdiv1, index) => {
    mdiv1.style.left = `${index * 100}%`;
});

const slideImage = () => {
    slides.forEach((mdiv1) => {
        mdiv1.style.transform = `translateX(-${counter * 100}%)`;
    });

    dots[counter].classList.add('active'); 
    dots.forEach(dot => dot.classList.remove('active')); 
    dots[counter].classList.add('active');   
};

const goPrev = () => {
    if (counter == 0) {
        counter = slides.length - 1;
    } else {
        counter--;
    }
    slideImage();
    resetInterval();
};

const goNext = () => {
    if (counter == slides.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    slideImage();
    resetInterval(); 
};

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index'));
        counter = index;
        slideImage();
        resetInterval();  
    });
});


const startSlideInterval = () => {
    slideInterval = setInterval(function() {
        counter = (counter + 1) % slides.length; 
        slideImage();
    }, 6999);
};

const resetInterval = () => {
    clearInterval(slideInterval);  
    startSlideInterval();  
};
startSlideInterval();



const card = document.querySelectorAll(".cardone");
let count=0;

card.forEach((cardone, index) => {
    cardone.style.left = `${index * 117}%`;
});

const slidecard = () => {
    card.forEach((cardone) => {
        cardone.style.transform = `translateX(-${count * 117}%)`;
    }); 
};
const cardslide =() => {
    setInterval(function() {
    count = (count + 1) % card.length; 
    slidecard();
}, 3999);
}
cardslide();

