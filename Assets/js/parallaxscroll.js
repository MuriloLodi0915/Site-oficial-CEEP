window.addEventListener('scroll', function() {
  const image = document.querySelector('.page2-image');
  const page3 = document.querySelector('.page3');
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const page3Top = page3.getBoundingClientRect().top + scrollPosition; 
  const maxScroll = page3.offsetHeight; 
  const moveFactor = 0.5; 


  if (scrollPosition > page3Top - windowHeight && scrollPosition < page3Top + page3.offsetHeight) {
    const progress = (scrollPosition - (page3Top - windowHeight)) / maxScroll;
    

    const parallaxScroll = Math.min(progress * 200, 200); 

    image.style.transform = `translateY(${-parallaxScroll}px)`;
  }
});