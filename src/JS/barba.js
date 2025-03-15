import barba from '@barba/core';
import { gsap } from 'gsap';

// import { introAnimatioScreen  } from '../JS/HomePage/introAnimation';

// import { initGridAnimations } from '../JS/scrollTriggerHome'; 

import { animationScrool } from './HomePage/galleryScrool';
import { resizeSVG } from '../JS/SVGTransitionPage';
import { footerReveal} from '../JS/Work-Page/footerReveal';
import ScrollTrigger from "gsap/ScrollTrigger";
import { clock } from "./HomePage/timeZone"
import {introAbout} from "../JS/AboutPage/introAbout"
import { reveleText  } from "../JS/AboutPage/revealText"
import { MenuAnimations } from './menu';
import Marquee3k from 'marquee3000';
import { slider } from './HomePage/swiper';
import { leaveAnimation } from './TransitionAnimations/leave';
import { enterWork } from './TransitionAnimations/enterWork';
import { enterAbout } from './TransitionAnimations/enterAbout';
import { enterHome } from './TransitionAnimations/enterHome';
import { enterContact } from './TransitionAnimations/enterContact';
import { enterAllWork } from './TransitionAnimations/allWork';
import { buttonsActive } from './buttonsActive';
import 'scroll-restoration-polyfill';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";




// Registruj plugin ako već nije registrovan
gsap.registerPlugin(ScrollToPlugin);

export function initBarba() {
  let isTransitionRunning = false;

  const curveSvg = document.querySelector('.curve-svg')
  
  gsap.registerPlugin(ScrollTrigger); 

  // Marquee3k.init()
  // Onemogući browser scroll restoraciju
  // if (history.scrollRestoration) {
  //   history.scrollRestoration = 'manual';
  // }
window.onpopstate = function (event) {
  if (isTransitionRunning) {
    event.preventDefault(); // Spreči promenu URL-a
    console.log("Tranzicija je u toku. Promena stranice nije dozvoljena.");
  }
};

// Onemogući refresh tokom tranzicije
window.onbeforeunload = function () {
  if (isTransitionRunning) {
    return "Da li ste sigurni da želite da napustite stranicu? Tranzicija je u toku.";
  }
};

  function startVideo() {
    const videos = document.querySelectorAll('video');
     videos.forEach(video => {
         video.play();
     })
  }


  barba.hooks.beforeEnter((data) => {
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
   

    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        behavior: 'auto', // Forsiraj trenutni scroll na vrh
      });
    });
  
    resizeSVG()
   
 
   
  });
  barba.hooks.beforeLeave(() => {
   
  });

  barba.hooks.before(() => {
    isTransitionRunning = true;
   
  });
  barba.hooks.enter(({ next }) => {
    // ScrollTrigger.refresh(); 
    document.body.classList.add('no-scroll');

    Marquee3k.init();
    if (next.namespace.includes('home')) {
     
      slider();

      animationScrool();
      clock();
      
    }

    if (next.namespace.includes('allwork')) {
     
      buttonsActive() 
      
    }

    if (next.namespace.includes('protfolio') || next.namespace.includes('lemonaide')) {
      startVideo();
      // footerReveal();
    }

    if (next.namespace.includes('about')) {
      introAbout();
      reveleText();
      footerReveal(); 
    }

    ScrollTrigger.refresh(); 
  });

  barba.hooks.afterEnter(( {next}) => {
  //   isTransitionRunning = false;
  // window.onpopstate = null; // Ponovo omogući strelice "napred/nazad"
  // window.onbeforeunload = null; // Ponovo omogući refresh
    MenuAnimations()
    document.body.classList.remove('no-scroll');
    if (next.namespace.includes('protfolio') || next.namespace.includes('home')) {
       footerReveal(); 
    }
   
    ScrollTrigger.refresh(); 
  });

  barba.hooks.leave(({ current }) => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill()); 
  });
  barba.hooks.beforeLeave(() => {
    
  });

  barba.init({
    // sync: true, // Za bolju sinhronizaciju animacija
    preventScroll: true,
    debug: true,
    transitions: [

      {
        name: 'once transitions all',
       
        once: async ({ next }) => { // Postavi 'async' kako bi mogao koristiti 'await'
         
     
         if (next.namespace === 'home') {
          // introAnimatioScreen() 
         
        // letterAnimations();
        slider()
        animationScrool();
        clock() 
        }

        if (next.namespace === 'about') {
          introAbout();
          requestAnimationFrame(() => {
            reveleText();
          });
          footerReveal()

       
        }
      

       if (next.namespace === 'protfolio' || next.namespace === 'lemonaide') {
        
      startVideo()
      footerReveal();

       }
       if (next.namespace === 'allwork') {
        buttonsActive() 
      }
    
       ScrollTrigger.refresh();
        },
        leave: ({ current }) => {
          console.log('Home to Work Transition: Leave - Napustamo Home stranicu');
            return leaveAnimation(current);
          },
          enter: ({ next }) => {

            //     console.log('Home to Work Transition: Enter - Ulazimo na Work stranicu');
                 const currentNamespace = next.namespace;
                 if (currentNamespace.includes('protfolio')) {
                  return enterWork(next); // Ulazna animacija za Portfolio
                } else if (currentNamespace.includes('about')) {
                  return enterAbout(next); // Ulazna animacija za About
                } else if (currentNamespace.includes('contact')) {
                  return enterContact(next); // Ulazna animacija za Contact
                } else if (currentNamespace.includes('home')) {
                  return enterHome(next);
                } else if (currentNamespace.includes('allwork')) {
                  return enterAllWork(next);
                }
      }
      }
   
  //     {
  //       name: 'home-to-work-transition',
  //       from: {
  //         namespace: ['home'],
  //       },
  //       to: {
  //         namespace: ['protfolio', 'lemonaide', 'about', 'contact'],
  //       },
  //       leave: ({ current }) => {
  //         console.log('Home to Work Transition: Leave - Napustamo Home stranicu');
  //           return leaveAnimation(current);
  //         },
       
  //       enter: ({ next }) => {

  //     //     console.log('Home to Work Transition: Enter - Ulazimo na Work stranicu');
  //          const currentNamespace = next.namespace;
  //          if (currentNamespace.includes('protfolio')) {
  //           return enterPortfolio(next); // Ulazna animacija za Portfolio
  //         } else if (currentNamespace.includes('about')) {
  //           return enterAbout(next); // Ulazna animacija za About
  //         } else if (currentNamespace.includes('contact')) {
  //           return enterContact(next); // Ulazna animacija za Contact
  //         }
  //   },
     
  // },
      // {
      //   name: 'work-to-home-transition',
      //   from: {
      //     namespace: ['protfolio', 'lemonaide', 'about', 'contact'],
      //   },
      //   to: {
      //     namespace: ['home'],
      //   },
      //   leave: ({ current }) => {
      //     console.log('Work to Home Transition: Leave - Napustamo Work stranicu');
      //     // return new Promise((resolve) => {
      //     //   gsap.to(curveSvg, {
      //     //     y: '0',
      //     //     duration: 1.5,
      //     //     ease: 'power3.inOut',
      //     //     onComplete: () => {
      //     //       current.container.remove();
      //     //       resolve();
      //     //     },
      //     //   });
      //     // });
      //   },
      //   enter: ({ next }) => {
      //     console.log('Work to Home Transition: Enter - Ulazimo na Home stranicu');
      //     return new Promise((resolve) => {
      //         const tl = gsap.timeline({
      //         onComplete: () => {
      //           const correction = 100 +  100
      //           gsap.set(curveSvg, {
      //             y: `${correction}%`,
      //           })
      //           ScrollTrigger.refresh();
      //           resolve();
      //         },
      //       });
      //       gsap.set('.titlesForPages__home', { y: "100%" });
      //         tl.to('.titlesForPages__home', {
      //         opacity: 1,
      //         y: "0",
      //         duration: 0.75,
              
      //         ease: "power4.out"
      //       });

      //       tl.addLabel('start', '-=0.3');

      //       tl.to(curveSvg, {
      //         y: '-100%',
      //             duration: 1.5,
      //             ease: 'power3.inOut',
              
              
      //       }, 'start' );
      //       tl.to('.titlesForPages__home', {
      //         opacity: 0,
      //         y: "-300%",
      //         duration: 0.75,
              
      //         ease: "power4.out"
              
              
      //       },'start+=0.5');
      //     });
      //   },
      // },

        
    
    ],
  });

}



