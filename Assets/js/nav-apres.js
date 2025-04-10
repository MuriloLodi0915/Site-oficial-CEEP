
const slidesSections = document.querySelectorAll('.swiper-slide');
const courseTabs = document.querySelectorAll('.course-tab');

let currentSection = 0;

// Atualiza a visibilidade das seções de slides
function updateSlidesVisibility() {
  slidesSections.forEach((section, index) => {
    section.style.display = index === currentSection ? 'block' : 'none';
  });
}

// Eventos para os botões de curso
courseTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    currentSection = index; 
    updateSlidesVisibility(); 
    courseTabs.forEach(t => t.classList.remove('active')); 
    tab.classList.add('active'); 
  });
});


updateSlidesVisibility();