    
    
        // Menu 
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");
        const menuoverlay = document.querySelector(".menu-overlay");
        hamburger.addEventListener("click", ()=> {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
            menuoverlay.classList.toggle("active");
            if (navMenu.classList.contains("active")) {
                    document.body.style.overflow = "hidden";
                } else {
                    document.body.style.overflow = "";
                }
        });
        
        // Menu 
// accordian
        function toggleAccordion(header) {
      const item = header.parentElement;
      const body = header.nextElementSibling;
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.accordion-item.active').forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    }
    document.addEventListener('DOMContentLoaded', () => {
      const firstItem = document.querySelector('.accordion-item');
      if (firstItem) {
        firstItem.classList.add('active');
      }
    });
// accordian