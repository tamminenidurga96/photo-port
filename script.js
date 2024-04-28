document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    const showSlide = (slideIndex) => {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slides[slideIndex].classList.add("active");
    };

    document.querySelector(".prev-btn").addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    document.querySelector(".next-btn").addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".image-slider img");
    let currentIndex = 0;

    const showSlide = (index) => {
        slides.forEach((slide) => {
            slide.style.transform = `translateX(${-index * 100}%)`; // Adjust based on image width
        });
    };

    document.querySelector(".prevBtn").addEventListener("click", () => {
        currentIndex = Math.max(currentIndex - 1, 0);
        showSlide(currentIndex);
    });

    document.querySelector(".nextBtn").addEventListener("click", () => {
        currentIndex = Math.min(currentIndex + 1, slides.length - 1);
        showSlide(currentIndex);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.getElementById("prevBtn1");
    const nextBtn = document.getElementById("nextBtn1");
    const slideContainer = document.querySelector(".slide-container");

    let scrollAmount = 0;
    const scrollStep = 400; // Adjust this value based on the desired scroll distance

    nextBtn.addEventListener("click", function () {
        if (scrollAmount + scrollStep < slideContainer.scrollWidth - slideContainer.clientWidth) {
            scrollAmount += scrollStep;
            slideContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        }
    });

    prevBtn.addEventListener("click", function () {
        if (scrollAmount - scrollStep >= 0) {
            scrollAmount -= scrollStep;
            slideContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        }
    });
});

