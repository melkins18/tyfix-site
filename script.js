// -----------------------------
// Tyfix Auto Sales Script.js
// -----------------------------

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,       // Animation duration in milliseconds
    easing: 'ease-in-out',
    once: true           // Animations happen only once
  });
  
  // Fade-in the main CTA button on scroll
  const ctaButton = document.querySelector('.py-24 a');
  
  if (ctaButton) {
    // Initial hidden state
    ctaButton.classList.add('opacity-0', 'translate-y-6', 'transition', 'duration-700');
  
    // IntersectionObserver to reveal button when visible
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          ctaButton.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, { threshold: 0.5 });
  
    observer.observe(ctaButton);
  }
  
  // Optional: Smooth scroll for anchor links (CSS already handles basic smooth scroll)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });