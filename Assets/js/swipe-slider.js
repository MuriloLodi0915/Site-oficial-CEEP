document.addEventListener('DOMContentLoaded', function () {
    const slideshowContainer = document.querySelector('.slideshow-container');
    const slidesSections = document.querySelectorAll('.slides-section');
    const dots = document.querySelectorAll('.dot');
    let startX;
    let currentSection = 0;
    let currentSlide = 0;
    const swipeThreshold = 0.99; // 99%

    function updateSlidesVisibility() {
        slidesSections.forEach((section, index) => {
            section.classList.toggle('active', index === currentSection);
        });
    }

    function updateSlideshow() {
        const section = slidesSections[currentSection];
        section.style.transform = `translateX(${-currentSlide * 100}vw)`;
        updateDots();
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function handleTouchStart(event) {
        startX = event.touches[0].clientX;
    }

    function handleTouchMove(event) {
        if (!startX) return;
        const currentX = event.touches[0].clientX;
        const diffX = startX - currentX;
        const swipePercentage = Math.abs(diffX) / slideshowContainer.clientWidth;

        if (swipePercentage > swipeThreshold) {
            if (diffX > 0 && currentSlide < slidesSections[currentSection].children.length - 1) {
                currentSlide++;
            } else if (diffX < 0 && currentSlide > 0) {
                currentSlide--;
            }
            updateSlideshow();
            startX = null; 
        }
    }

    function handleDotClick(index) {
        currentSlide = index;
        updateSlideshow();
    }

    function handleKeydown(event) {
        if (event.key === 'ArrowRight' && currentSlide < slidesSections[currentSection].children.length - 1) {
            currentSlide++;
            updateSlideshow();
        } else if (event.key === 'ArrowLeft' && currentSlide > 0) {
            currentSlide--;
            updateSlideshow();
        }
    }

    slideshowContainer.addEventListener('touchstart', handleTouchStart);
    slideshowContainer.addEventListener('touchmove', handleTouchMove);
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => handleDotClick(index));
    });
    document.addEventListener('keydown', handleKeydown);
    
    updateSlidesVisibility();
    updateSlideshow();
});



