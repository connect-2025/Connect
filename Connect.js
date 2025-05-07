particlesJS("particles-js", {
    "particles": {
      "number": { "value": 80 },
      "color": { "value": "#ffffff" },
      "shape": { "type": "circle" },
      "opacity": {
        "value": 0.8,
        "random": true
      },
      "size": {
        "value": 50,
        "random": true
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "top",
        "out_mode": "out"
      }
    },
    "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false } } },
    "retina_detect": true
  });

  // Simple scroll animation
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".grid-card");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
  
    cards.forEach(card => {
      observer.observe(card);
    });
  });