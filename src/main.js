// import './style.css'
import '../src/scss/style.scss';


import { initBarba } from '../src/JS/barba';
import gsap  from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";  

import Marquee3k from 'marquee3000';


gsap.registerPlugin(ScrollTrigger);


// const phoneItems = gsap.utils.toArray('.phone-item');
// const firstPhone = phoneItems[0];
// const secondPhone = phoneItems[1];

// // Postavi početne pozicije
// gsap.set(firstPhone, { y: '30%' }); // Prvi pomakni za 50% dolje
// gsap.set(secondPhone, { y: '25%' }); // Drugi pomakni za 25% dolje

// // Animacija za prvi .phone-item
// gsap.to(firstPhone, {
//   y: '0%', // Vrati ga na početnu poziciju (0%)
//   scrollTrigger: {
//     trigger: firstPhone, // Element koji pokreće animaciju
//     start: 'top center', // Kada animacija počinje
//     end: 'bottom center', // Kada animacija završava
//     scrub: true, // Animacija se "prilaže" scrollu
//     markers: true // Opcija za debug - prikazuje markere na stranici
//   }
// });

// // Animacija za drugi .phone-item
// gsap.to(secondPhone, {
//   y: '0%', // Vrati ga na početnu poziciju (0%)
//   scrollTrigger: {
//     trigger: secondPhone, // Element koji pokreće animaciju
//     start: 'top center', // Kada animacija počinje
//     end: 'bottom center', // Kada animacija završava
//     scrub: true, // Animacija se "prilaže" scrollu
//     markers: true // Opcija za debug - prikazuje markere na stranici
//   }
// });


let lenis;

// Function to initialize Lenis for smooth scrolling
const initSmoothScrolling = () => {
	// Instantiate the Lenis object with specified properties
	lenis = new Lenis({
		lerp: 0.1, // Lower values create a smoother scroll effect
		smoothWheel: true // Enables smooth scrolling for mouse wheel events
	});

	// Update ScrollTrigger each time the user scrolls
	lenis.on('scroll', () => ScrollTrigger.update());

	// Define a function to run at each animation frame
	const scrollFn = (time) => {
		lenis.raf(time); // Run Lenis' requestAnimationFrame method
		requestAnimationFrame(scrollFn); // Recursively call scrollFn on each frame
	};
	// Start the animation frame loop
	requestAnimationFrame(scrollFn);
};

// MenuAnimations()
// initSmoothScrolling()
// setupAllHoverAnimations()

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('load', function() {
        document.body.style.display = 'block';  // Promeni display na block
        initBarba(); 
		initSmoothScrolling()
});
	
});