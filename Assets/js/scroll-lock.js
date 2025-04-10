const scrollContainer = document.querySelector('.all-pages');
let lastScrollPosition = 0;

function snapScroll() {
  if (window.innerWidth < 1400) return;

  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition > lastScrollPosition) {
    const nearestElement = getNearestElement(currentScrollPosition);

    const distanceToNext = nearestElement.offsetTop - currentScrollPosition;
    if (distanceToNext < 200) {
      window.scrollTo({
        top: nearestElement.offsetTop,
        behavior: 'smooth'
      });
    }
  }

  lastScrollPosition = currentScrollPosition;
}

function getNearestElement(scrollPosition) {
  const elements = document.querySelectorAll('.scroll-lock');
  let nearestElement = null;

  elements.forEach((element) => {
    if (element.offsetTop > scrollPosition && !nearestElement) {
      nearestElement = element;
    }
  });

  return nearestElement;
}

window.addEventListener('scroll', debounce(() => {
  snapScroll();
}, 40));

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}