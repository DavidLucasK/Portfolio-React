export function goTo() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1); // Remove o "#"
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Define o offset para 'header' e 'techs'
        let offset = 0;
        if (targetId === 'techs') {
          offset = -100; // Sobe 180px a mais do que o id faria subir
        }
        else if (targetId === 'header') {
          offset = -180;
        }

        window.scrollTo({
          top: targetElement.offsetTop + offset,
          behavior: 'smooth'
        });
      }
    });
  });
}