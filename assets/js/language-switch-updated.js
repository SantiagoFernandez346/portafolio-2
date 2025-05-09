document.addEventListener("DOMContentLoaded", function() {
  var translations = {
    en: {
      "menu-about": "About Me",
      "menu-skills": "What I’m good at",
      "menu-work": "My Work",
      "menu-contact": "Contact Me",
      "section1-title": "About Me",
      "section1-content": "Highly motivated and results-oriented Junior Frontend Developer with 3 years of programming experience and a strong passion for creating engaging user experiences. Eager to contribute technical skills in HTML5, CSS, JavaScript, React and MySQL to a challenging role where I can apply my knowledge and contribute to innovative web development projects. Committed to continuous learning and professional growth in a collaborative team environment.",
      "section4-title": "Contact Me",
      "section4-content": "Here you can find the ways to contact me and you can download my resume.",
      "copyright-text": "Copyright 2025 Santiago Fernandez",
      "skills-heading": "What I’m good at?",
      "skills-description": "Here you can see my skills and the technologies I currently use to develop my web pages.",
      "skill-html": "HTML5 & CSS3",
      "skill-html-desc": "Experience in HTML5 and CSS3, with knowledge of responsive design and frameworks such as Bootstrap. Ability to create attractive and functional user interfaces, optimizing the user experience on different devices.",
      "skill-react": "ReactJS",
      "skill-react-desc": "Experience in ReactJS, with knowledge of component-based architecture and state management. Ability to create dynamic and interactive web applications, optimizing performance and user experience.",
      "skill-js": "JavaScript",
      "skill-js-desc": "Proficient in JavaScript programming, including ES6+ features, DOM manipulation, and asynchronous programming. Skilled in building interactive and responsive web applications.",
      "skill-mysql": "MySQL",
      "skill-mysql-desc": "Experience with MySQL database management, including designing schemas, writing queries, and optimizing performance for web applications.",
      "skill-nodejs": "NodeJS",
      "skill-nodejs-desc": "Proficient in NodeJS, with knowledge of asynchronous programming, event-driven I/O, and REST APIs. Skilled in building scalable and high-performance server-side applications.",
      "work-heading": "My Work",
      "work-description": "Here you can see all the projects I've been working on lately and the technologies I've been using."
    },
    es: {
      "menu-about": "Sobre mí",
      "menu-skills": "En qué soy bueno",
      "menu-work": "Mi trabajo",
      "menu-contact": "Contáctame",
      "section1-title": "Sobre mí",
      "section1-content": "Desarrollador Frontend Junior altamente motivado y orientado a resultados con 3 años de experiencia en programación y una gran pasión por crear experiencias de usuario atractivas. Deseoso de aportar habilidades técnicas en HTML5, CSS, JavaScript, React y MySQL a un rol desafiante donde pueda aplicar mis conocimientos y contribuir a proyectos innovadores de desarrollo web. Comprometido con el aprendizaje continuo y el crecimiento profesional en un entorno de equipo colaborativo.",
      "section4-title": "Contáctame",
      "section4-content": "Aquí puedes encontrar las formas de contactarme y puedes descargar mi currículum.",
      "copyright-text": "Derechos de autor 2025 Santiago Fernandez",
      "skills-heading": "¿En qué soy bueno?",
      "skills-description": "Aquí puedes ver mis habilidades y las tecnologías que actualmente uso para desarrollar mis páginas web.",
      "skill-html": "HTML5 y CSS3",
      "skill-html-desc": "Experiencia en HTML5 y CSS3, con conocimiento de diseño responsivo y frameworks como Bootstrap. Capacidad para crear interfaces de usuario atractivas y funcionales, optimizando la experiencia del usuario en diferentes dispositivos.",
      "skill-react": "ReactJS",
      "skill-react-desc": "Experiencia en ReactJS, con conocimiento de arquitectura basada en componentes y gestión de estado. Capacidad para crear aplicaciones web dinámicas e interactivas, optimizando el rendimiento y la experiencia del usuario.",
      "skill-js": "JavaScript",
      "skill-js-desc": "Competente en programación JavaScript, incluyendo características ES6+, manipulación del DOM y programación asíncrona. Habilidad para construir aplicaciones web interactivas y responsivas.",
      "skill-mysql": "MySQL",
      "skill-mysql-desc": "Experiencia en gestión de bases de datos MySQL, incluyendo diseño de esquemas, escritura de consultas y optimización del rendimiento para aplicaciones web.",
      "skill-nodejs": "NodeJS",
      "skill-nodejs-desc": "Competente en NodeJS, con conocimiento de programación asíncrona, E/S orientada a eventos y APIs REST. Habilidad para construir aplicaciones del lado del servidor escalables y de alto rendimiento.",
      "work-heading": "Mi trabajo",
      "work-description": "Aquí puedes ver todos los proyectos en los que he estado trabajando últimamente y las tecnologías que he estado usando."
    }
  };

  function setLanguage(lang) {
    Object.keys(translations[lang]).forEach(function(id) {
      var element = document.getElementById(id);
      if (element) {
        element.textContent = translations[lang][id];
      }
    });
  }

  document.getElementById("btn-es").addEventListener("click", function() {
    setLanguage("es");
  });

  document.getElementById("btn-en").addEventListener("click", function() {
    setLanguage("en");
  });
});
