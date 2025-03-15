import { gsap } from 'gsap';

export function enterWork(next) {
    console.log('Enter Contact: Ulazimo na Contact stranicu');
    const curveSvg = document.querySelector('.curve-svg')
       
    return new Promise((resolve) => {
      const tl = gsap.timeline({
        onComplete: () => {
            const correction = 100 + 100
            gsap.set(curveSvg, {
              y: `${correction}%`,
            })
        //   ScrollTrigger.refresh();
          resolve();
        }
      });
      const targetTitle = document.querySelector('.titlesForPages__work');
    //   const movingBack = document.querySelector(".header__con")
      

    //   gsap.set([firstLine,  secondLine, thirdLine], {y: "100%"});
    //   gsap.set(movingBack, {y:"50%"});
      gsap.set(targetTitle, { y: '100%' });
  
      tl.to(targetTitle, {
            opacity: 1,
            y: "0",
            duration: 0.75,
            
            ease: "power4.out"
          });
  
          tl.to(targetTitle, {
            opacity: 0,
            y: "-300%",
            duration: 0.75,
            ease: "power4.out",
            delay: 0.5  
          },0);
        //   tl.to(movingBack, {
        //     y: "0",
        //     duration: 2,       
        //       stagger: 0.1,        
        //      ease: "power3.out"  
        //     },0)
            tl.to(curveSvg, {
              
                y: '-100%',
                duration: 1.5,
                ease: 'power3.inOut'
            
            },0)
      
    });
  }