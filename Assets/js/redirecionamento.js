document.querySelectorAll('.apres .course-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const cursosSection = document.getElementById('cursos');
    cursosSection.scrollIntoView({ behavior: 'smooth' });
  });
});