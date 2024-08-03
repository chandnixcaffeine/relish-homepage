document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const mobileMenu = document.getElementById('mobile-menu');

    menuIcon.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    // gsap.from("#text-box h1", {
    //     y: 100,
    //     opacity: 0,
    //     duration: 2,
    //     delay: 0.2
    // });

    // gsap.from('#page2 h2',{
    //     scale: 0,
    //     delay: 1,
    //     duration: 1,
    // });

    // gsap.from("#text-box h3", {
    //     y: 10,
    //     opacity: 0,
    //     duration: 1.9,
    //     delay: 1,
    //     scrollTrigger: {
    //         trigger: "#text-box h3",
    //         scroller: body,
    //         start: "top 40%",
    //         end: "top 30%",
    //         scrub: true
    //     }
    
    // });

});

window.addEventListener('scroll', () => {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('nav a');
  
    sections.forEach(section => {
      let top = window.scrollY;
      let offset = section.offsetTop - 150;
      let height = section.offsetHeight;
      let id = section.getAttribute('id');
  
      if (top >= offset && top < offset + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          document.querySelector('nav a[href*=' + id + ']').classList.add('active');
        });
      }
    });
  });
  