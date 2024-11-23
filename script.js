document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Evento para abrir/cerrar el menú
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('open');
    });

    // Hacer que el nav aparezca como fijo en la parte superior
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 0) {
            nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
        } else {
            nav.style.boxShadow = 'none';
        }
    });
});


document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('click', (e) => {
        let socialPlatform = e.currentTarget.classList[1]; // Obtiene la clase específica (facebook, twitter, etc.)
        let message;

        // Mensajes personalizados según la red social
        switch (socialPlatform) {
            case 'facebook':
                message = '¡Gracias por seguirnos en Facebook! Mantente al día con nuestras noticias y eventos.';
                break;
            case 'twitter':
                message = '¡Gracias por seguirnos en Twitter! No te pierdas nuestras últimas actualizaciones.';
                break;
            case 'instagram':
                message = '¡Gracias por seguirnos en Instagram! Inspírate con nuestro contenido visual.';
                break;
            case 'youtube':
                message = '¡Gracias por suscribirte a nuestro canal de YouTube! Disfruta de nuestros videos inspiradores.';
                break;
            case 'linkedin':
                message = '¡Gracias por conectarte con nosotros en LinkedIn! Construyamos juntos un futuro mejor.';
                break;
            default:
                message = '¡Gracias por seguirnos!';
        }

        // Muestra un mensaje personalizado
        alert(message);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Animación inicial de los elementos del nav
    gsap.from('.nav-menu li', {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: 'power2.out',
    stagger: 0.2
    });

    // Animación al hacer hover en los íconos
    const icons = document.querySelectorAll('.nav-menu i');
    icons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
        scale: 1.5,
        duration: 0.3,
        ease: 'elastic.out(1, 0.5)'
        });
    });

    con.addEventListener('mouseleave', () => {
        gsap.to(icon, {
        scale: 1,
        duration: 0.3,
        ease: 'elastic.out(1, 0.5)'
        });
    });
    });
});





document.addEventListener('DOMContentLoaded', () => {
    // Inicializa GSAP y ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
  
    // Animación del encabezado (Hero Section)
    gsap.from('.hero h1', {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power2.out',
    });
  
    gsap.from('.hero p', {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.5,
      ease: 'power2.out',
    });
  
    gsap.from('.hero .btn-primary', {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      delay: 1,
      ease: 'elastic.out(1, 0.5)',
    });
  
    // Animación para "Acerca de Generación Impacto"
    gsap.from('.about-header img', {
      opacity: 0,
      scale: 0.5,
      duration: 1,
      ease: 'elastic.out(1, 0.5)',
      scrollTrigger: {
        trigger: '.about',
        start: 'top 80%',
      },
    });
  
    
  
    // Animación de tarjetas en "Acerca de"
    gsap.from('.feature-card', {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.features',
        start: 'top 80%',
      },
    });
  
    // Animación para "Nuestras Secciones"
    
  
    gsap.from('.card', {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.card-grid',
        start: 'top 80%',
      },
    });
  
    // Animación para "Conoce al Equipo"
    gsap.from('.team h2', {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: 'elastic.out(1, 0.5)',
      scrollTrigger: {
        trigger: '.team',
        start: 'top 80%',
      },
    });
  
    gsap.from('.team p', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.team',
        start: 'top 70%',
      },
    });
  
    gsap.from('.team-member', {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      stagger: 0.2,
      ease: 'elastic.out(1, 0.5)',
      scrollTrigger: {
        trigger: '.team-grid',
        start: 'top 80%',
      },
    });
  
    
  
        gsap.from('.social-footer .footer-copy', {
            opacity: 0,
            y: 20,
            duration: 1,
            delay: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.social-footer',
              start: 'top 90%',
            },
          });
        });
        
          

          ScrollTrigger.create({
            trigger: '.sections',
            start: 'top bottom',
            onEnter: () => console.log('Sección cargada'),
          });
          

          gsap.from('body', {
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
          });
          
          gsap.from('nav', {
            y: -50,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
          });
          

          gsap.to('.empowering-logo', {
            rotate: 360,
            repeat: -1,
            duration: 10,
            ease: 'linear',
          });

          
          
          document.addEventListener('DOMContentLoaded', () => {
            // Registrar SplitText
            gsap.registerPlugin(SplitText);
          
            // Seleccionar el texto
            const logoText = document.getElementById('animated-logo');
          
            // Dividir el texto en caracteres
            const splitText = new SplitText(logoText, { type: 'chars' });
          
            // Animación avanzada
            gsap.from(splitText.chars, {
              opacity: 0,
              scale: 4,
              y: 200,
              rotationX: 360,
              transformOrigin: '50% 50%',
              duration: 1.5,
              stagger: 0.05,
              ease: 'back.out(1.7)',
            });
          
            // Efecto adicional de glitch
            gsap.to(splitText.chars, {
              x: (i) => gsap.utils.random(-10, 10),
              y: (i) => gsap.utils.random(-10, 10),
              duration: 0.1,
              repeat: 5,
              ease: 'power3.inOut',
              stagger: 0.02,
              delay: 2,
            });
          });
          