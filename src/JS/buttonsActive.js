
import { gsap } from 'gsap';
export const buttonsActive = () => {
    const buttons = document.querySelectorAll('.button__fillter');
    const gridItems = document.querySelectorAll('.work__grid__list li');
    const cardItems = document.querySelectorAll('.card');
  
    // buttons.forEach(button => {
    //   button.addEventListener('click', function() {
    //     // Uklanjanje 'active-button' klase sa svih dugmadi
    //     buttons.forEach(btn => btn.classList.remove('active-button'));
  
    //     // Dodavanje 'active-button' klase na kliknuto dugme
    //     this.classList.add('active-button');

    //     const filter = button.textContent.toLowerCase();
    //     console.log(`Filter clicked: ${filter}`);

    //     gridItems.forEach(item => {

    //         const category = item.getAttribute('data-category');
    //         console.log(`Item category: ${category}`); 

    //         if (filter === 'all' || category === filter) {
    //             item.classList.remove('hidden');
    //             item.classList.add('vissible');
    //           } else {
    //             item.classList.remove('vissible');
    //             item.classList.add('hidden');
    //           }

    //     })

    //     cardItems.forEach(item => {
    //       const category = item.getAttribute('data-category');
    //       console.log(`Card Item category: ${category}`);

    //       if (filter === 'all' || category === filter) {
    //           item.classList.remove('hiddeno');
    //           item.classList.add('vissiblee');
    //       } else {
    //           item.classList.remove('vissiblee');
    //           item.classList.add('hiddeno');
    //       }
    //   });
 


    //   });
    // });

    buttons.forEach(button => {
      button.addEventListener('click', function() {
          // Uklanjanje 'active-button' klase sa svih dugmadi
          buttons.forEach(btn => btn.classList.remove('active-button'));
          this.classList.add('active-button'); // Dodavanje klase na aktivnu dugme

          const filter = this.textContent.trim().toLowerCase();  // Dohvatimo filter (e.g., "design")

          // Funkcija za filtriranje i primenu animacija
          const filterItems = (items, isCard = false) => {
              items.forEach(item => {
                  const category = item.getAttribute('data-category');
                  // Ako je filter "all" ili se kategorija poklapa sa filterom
                  const isVisible = filter === 'all' || category === filter;
                  // Primenjujemo odgovarajuće klase za vidljivost
                  item.classList.toggle(isCard ? 'card-visible' : 'grid-visible', isVisible);
                  item.classList.toggle(isCard ? 'card-hidden' : 'grid-hidden', !isVisible);
              });
          };

          // Filtriraj grid i card stavke
          filterItems(gridItems);
          filterItems(cardItems, true);  // true znači da se koristi drugačiji CSS za card
      });
  });

 

//     const layoutButton = document.getElementById('layout-toggle');
// const cardLayoutButton = document.getElementById('card-layout-toggle');
// const tableLayout = document.querySelector('.table-layout');
// const cardLayout = document.querySelector('.card-layout');

// // Funkcija za promenu layout-a na table
// layoutButton.addEventListener('click', function() {
//   // Animiraj prelaz za cardLayout da nestane
//   gsap.to(cardLayout, {
//     opacity: 0,
//     duration: 0.5,
//     onComplete: () => {
//       cardLayout.style.display = 'none'; // Sakrij card layout kada animacija završi
//     }
//   });

//   // Prikazi tableLayout i animiraj da postane vidljiv
//   gsap.to(tableLayout, {
//     opacity: 1,
//     duration: 0.5,
//     display: "block", // Prikazivanje table layout-a
//   });
// });

// cardLayoutButton.addEventListener('click', function() {
//   gsap.to(tableLayout, {
//     opacity: 0,
//     duration: 0.5,
//     display: "none",
//     onComplete: () => {
//       cardLayout.style.display = 'block';
      
//       // Animacija za kartice (staggered animacija)
//       gsap.fromTo(".card", 
//         {
//           opacity: 0, // Početna nevidljivost
//           y: 100,    // Početni pomak sa leve strane
//         },
//         {
//           opacity: 1, // Finalna opacnost
//           x: 0,       // Pomeri ih na početnu poziciju
//           stagger: 0.2, // Kašnjenje između kartica (0.2s za svaku karticu)
//           duration: 0.5, // Trajanje svake animacije
//         });
//     }
//   });
// });

const layoutButton = document.getElementById('layout-toggle');
const cardLayoutButton = document.getElementById('card-layout-toggle');
const tableLayout = document.querySelector('.table-layout');
const cardLayout = document.querySelector('.card-layout');

// Funkcija za promenu layout-a na table
layoutButton.addEventListener('click', function() {
  // Animiraj prelaz za cardLayout da nestane
  gsap.to(cardLayout, {
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      cardLayout.style.display = 'none'; // Sakrij card layout kada animacija završi
    }
  });

  // Prikazi tableLayout i animiraj da postane vidljiv
  gsap.to(tableLayout, {
    opacity: 1,
    duration: 0.5,
    display: "block", // Prikazivanje table layout-a
    clearProps: "all" // Resetuje sve stilove (dopušta ponovni "fade" efekat)
  });
});

// Funkcija za promenu layout-a na card
cardLayoutButton.addEventListener('click', function() {
  gsap.to(tableLayout, {
    opacity: 0,
    duration: 0.5,
    display: "none",
    onComplete: () => {
      cardLayout.style.display = 'block';
      
      // Animacija za kartice (staggered animacija)
      gsap.fromTo(".card", 
        {
          opacity: 0, // Početna nevidljivost
          y: 100,    // Početni pomak sa dole
        },
        {
          opacity: 1, // Finalna opacnost
          y: 0,       // Kartice dolaze na svoju poziciju (vertikalno)
          stagger: 0.2, // Kašnjenje između kartica (0.2s za svaku karticu)
          duration: 0.5, // Trajanje svake animacije
          clearProps: "all" // Resetuje sve stilove (dopušta ponovni "fade" efekat)
        });
    }
  });
});

  

  };