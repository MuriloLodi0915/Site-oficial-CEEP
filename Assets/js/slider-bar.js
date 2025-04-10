document.addEventListener('DOMContentLoaded', function () {
    const slideshowContainer = document.querySelector('.slideshow-container');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const courseTabs = document.querySelector('.course-tabs');
    const courseTabItems = document.querySelectorAll('.course-tab'); 
    let startX;


    function handleTouchStart(event) {
        startX = event.touches[0].clientX; 
    }

   
    function handleTouchMove(event) {
        if (!startX) return; 
        const currentX = event.touches[0].clientX; 
        const diffX = startX - currentX; 

      
        if (diffX > 50) {
            document.querySelector('.next').click(); 
            startX = null; 
        }
   
        else if (diffX < -50) {
            document.querySelector('.prev').click(); 
            startX = null; 
        }
    }


    sidebarToggle.addEventListener('click', () => {
        courseTabs.classList.toggle('active'); 
    });

    
    function hideSidebar() {
        courseTabs.classList.remove('active'); 
    }

    
    courseTabItems.forEach(item => {
        item.addEventListener('click', () => {
            hideSidebar(); 
        });
    });

    // Adiciona os eventos de toque ao container do slideshow
    slideshowContainer.addEventListener('touchstart', handleTouchStart);
    slideshowContainer.addEventListener('touchmove', handleTouchMove);
});
