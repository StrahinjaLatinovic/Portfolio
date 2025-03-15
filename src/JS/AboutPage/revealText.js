import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; 

gsap.registerPlugin(ScrollTrigger);

export const reveleText = () => {
    const firstLine = gsap.utils.toArray(".first-row  .word-inner");
    const secondLine = gsap.utils.toArray(".second-row .word-inner");
    const thirdLine = gsap.utils.toArray(".third-row .word-inner");
    
    if (firstLine.length === 0 || secondLine.length === 0 || thirdLine.length === 0) {
      console.error("Elementi za animaciju nisu pronađeni u DOM-u!");
      return;
    }
    gsap.set([firstLine,  secondLine, thirdLine], {
                       
        y: "100%",                      
                    
      });
      const tl = gsap.timeline({
        defaults: {
          duration: 1,       // Postavi podrazumevanu dužinu animacije za ovaj timeline
          stagger: 0.1,        // Postavi podrazumevani stagger za ovaj timeline
          ease: "power3.out"   // Postavi podrazumevani easing za ovaj timeline
        }
      });
    
      tl.to(firstLine, {
        y:"0"
      })
    
      .to(secondLine, {
        y:"0"
      }, 0)
    
      .to(thirdLine, {
        y:"0"
      }, 0)
    
    
      ScrollTrigger.create({
        animation: tl,  // Povezujemo ScrollTrigger sa timeline-om
        trigger: ".split-text",  // Definišemo koji element pokreće animaciju (u ovom slučaju .split-text)
        start: "top 80%",  // Početak animacije kada dođemo do 80% visine ekrana
        end: "bottom 20%", // Kraj animacije kada se element nađe na 20% visine ekrana
        markers: true,
        // scrub: true, 
      });
}

