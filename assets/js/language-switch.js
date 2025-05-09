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
