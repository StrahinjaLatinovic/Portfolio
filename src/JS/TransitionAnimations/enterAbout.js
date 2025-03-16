import { gsap } from 'gsap';

export function enterAbout(next) {
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
      const targetTitle = document.querySelector('.titlesForPages__about');
      const movingBack = document.querySelector(".header__con")
      const firstLine = gsap.utils.toArray(".before  .single__letter__inner");
      const secondLine = gsap.utils.toArray(".after .single__letter__inner");
      const thirdLine = gsap.utils.toArray(".center .single__letter__inner");

      gsap.set([firstLine,  secondLine, thirdLine], {y: "100%"});
      gsap.set(movingBack, {y:"50%"});
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
          tl.to(movingBack, {
            y: "0",
            duration: 2,       
              stagger: 0.1,        
             ease: "power3.out"  
            },0)
            .to(firstLine, {
              duration: 1.5,       
              stagger: 0.1,        
              ease: "power3.out",  
            
            y: "0",
            
            },0)
            .to(secondLine, {
            
              duration: 1.5,       
              stagger: 0.1,        
              ease: "power3.out",  
            y: "0",
            
            },0)
            .to(thirdLine, {
            
              duration: 1.5,       
              stagger: 0.1,        
              ease: "power3.out",  
            y: "0",
            
            },0);
  
          tl.to(curveSvg, {
            y: '-100%',
            duration: 1.5,
            ease: 'power3.inOut'
          },0);
    });
  }