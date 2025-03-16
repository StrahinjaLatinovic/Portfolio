import { gsap } from 'gsap';

export const introAbout = () => {

const movingBack = document.querySelector(".header__con")
const firstLine = gsap.utils.toArray(".before  .single__letter__inner");
const secondLine = gsap.utils.toArray(".after .single__letter__inner");
const thirdLine = gsap.utils.toArray(".center .single__letter__inner");




gsap.set([firstLine,  secondLine, thirdLine], {y: "100%"});

  gsap.set(movingBack, {y:"50%"})
 
  const tl = gsap.timeline({
	defaults: {
	  duration: 1,       
	  stagger: 0.1,        
	  ease: "power3.out"   
	}
  });

  tl.to(movingBack, {
	y: "0",
  })
  .to(firstLine, {
	
	
	y: "0",
	
  }, 0)
  .to(secondLine, {
	
	
	y: "0",
	
  }, 0)
  .to(thirdLine, {
	
	
	y: "0",
	
  }, 0);

}


