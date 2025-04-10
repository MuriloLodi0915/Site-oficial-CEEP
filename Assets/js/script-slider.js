const slideshowContainer = document.querySelector('.slideshow-container');
const slidesSections = document.querySelectorAll('.slides-section');
const dots = document.querySelectorAll('.dot');
const courseTabs = document.querySelectorAll('.course-tab');

let currentSection = 0;
let currentSlide = 0;

// Atualiza a visibilidade dos slides
function updateSlidesVisibility() {
  slidesSections.forEach((section, index) => {
    section.style.display = index === currentSection ? 'flex' : 'none';
  });
}

// Atualiza a navegação dos slides
function updateSlideshow() {
  const section = slidesSections[currentSection];
  section.style.transform = `translateX(${-currentSlide * 100}%)`; // Ajusta para 100% por slide
  updateDots();
}

// Atualiza os pontos de navegação
function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

// Função para atualizar a seção e o slide com base no ID clicado
function navigateToSection(sectionId) {
  const sectionMap = {
    'analise': 0,
    'quimica': 1,
    'agronegocios': 2,
    'farmacia': 3,
    'vestuario': 4,
    'marketing': 5,
    'seguranca': 6,
    'recursos-humanos': 7,
    'formacao': 8
  };

  const index = sectionMap[sectionId];
  if (index !== undefined) {
    currentSection = index;
    currentSlide = 0; // Reinicia para o primeiro slide
    updateSlidesVisibility();
    updateSlideshow();
    courseTabs.forEach(t => t.classList.remove('active'));
    courseTabs[index].classList.add('active'); // Marca a aba como ativa
    
    // Rola suavemente apenas em telas maiores
    if (window.innerWidth >= 768) { // Ajuste conforme necessário
      const offset = 80; // Ajuste este valor conforme necessário
      const targetPosition = courseTabs[index].getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  }
}

// Eventos para os botões de curso
const sectionIds = ['analise', 'quimica', 'agronegocios', 'farmacia', 'vestuario', 'marketing', 'seguranca', 'recursos-humanos', 'formacao'];
courseTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    navigateToSection(sectionIds[index]); // Usa a função de navegação
  });
});

// Adiciona eventos de clique para cada ID de seção
sectionIds.forEach(id => {
  document.getElementById(id).addEventListener('click', () => navigateToSection(id));
});

// Navegação entre os slides
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

nextButton.addEventListener('click', () => {
  const slidesCount = slidesSections[currentSection].children.length;
  console.log(`Navegando para próximo: Seção ${currentSection}, Total de Slides: ${slidesCount}, Slide Atual: ${currentSlide}`);
  currentSlide = (currentSlide + 1) % slidesCount; // Usa o número real de slides
  updateSlideshow();
});

prevButton.addEventListener('click', () => {
  const slidesCount = slidesSections[currentSection].children.length;
  console.log(`Navegando para anterior: Seção ${currentSection}, Total de Slides: ${slidesCount}, Slide Atual: ${currentSlide}`);
  currentSlide = (currentSlide - 1 + slidesCount) % slidesCount; // Usa o número real de slides
  updateSlideshow();
});

// Inicializar a apresentação de slides
function initializeSlideshow() {
  updateSlidesVisibility();
  updateSlideshow();
}

initializeSlideshow();
