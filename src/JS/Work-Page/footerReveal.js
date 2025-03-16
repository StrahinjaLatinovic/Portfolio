import gsap  from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const footerReveal = () => {
    // Selektuj elemente
const section = document.querySelector('.scroll-section-r');
const footer = document.querySelector('.footer-word-r');


gsap.to(footer, {
  y: 0, // Pomeri footer na njegovu originalnu poziciju
  scrollTrigger: {
    trigger: section, // Okidač za animaciju
    start: 'top top', // Počni animaciju kada vrh sekcije dodirne vrh viewport-a
    end: 'bottom top', // Završi animaciju kada dno sekcije dodirne vrh viewport-a
    scrub: true, // Animacija prati scroll (scrubovanje)
  },
});


}