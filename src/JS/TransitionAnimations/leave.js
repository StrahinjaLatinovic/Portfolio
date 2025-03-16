import { gsap } from 'gsap';



export function leaveAnimation(current) {
    console.log('Leave Animation: Napustamo trenutnu stranicu');
    const curveSvg = document.querySelector('.curve-svg')
    return new Promise((resolve) => {
      const tl = gsap.timeline({
        onComplete: () => {
          current.container.remove();
          resolve();
        }
      });
      tl.to(curveSvg, {
        y: '0',
        duration: 1.5,
        ease: 'power3.inOut',
      });
    });
  } 