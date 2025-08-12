// /*===== MENU SHOW =====*/ 
// const showMenu = (toggleId, navId) =>{
//     const toggle = document.getElementById(toggleId),
//     nav = document.getElementById(navId)

//     if(toggle && nav){
//         toggle.addEventListener('click', ()=>{
//             nav.classList.toggle('show')
//         })
//     }
// }
// showMenu('nav-toggle','nav-menu')

// function submitForm() {
//     // Clear the form fields
//     document.getElementById('contactForm').reset();

//     // Show the alert message
//     alert("Thank you for contacting!");
// }


// /*==================== REMOVE MENU MOBILE ====================*/
// const navLink = document.querySelectorAll('.nav__link')

// function linkAction(){
//     const navMenu = document.getElementById('nav-menu')
//     // When we click on each nav__link, we remove the show-menu class
//     navMenu.classList.remove('show')
// }
// navLink.forEach(n => n.addEventListener('click', linkAction))

// /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// const sections = document.querySelectorAll('section[id]')

// const scrollActive = () =>{
//     const scrollDown = window.scrollY

//   sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight,
//               sectionTop = current.offsetTop - 58,
//               sectionId = current.getAttribute('id'),
//               sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
//         if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
//             sectionsClass.classList.add('active-link')
//         }else{
//             sectionsClass.classList.remove('active-link')
//         }                                                    
//     })
// }
// window.addEventListener('scroll', scrollActive)

// /*===== SCROLL REVEAL ANIMATION =====*/
// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '60px',
//     duration: 2000,
//     delay: 200,
// //     reset: true
// });

// sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
// sr.reveal('.home__img, .about__subtitle, .about__text,.bd-work, .skills__img,.resume__content',{delay: 400}); 
// sr.reveal('.home__social-icon,.resume__container',{ interval: 200}); 
// sr.reveal('.skills__data, .work__img,.work__container,.contact_email,.contact_phone',{interval: 200}); 


// // document.querySelectorAll('.nav-links a').forEach(link => {
// //   link.addEventListener('click', function() {
// //     document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
// //     this.classList.add('active');
// //   });
// // });

// // if ('serviceWorker' in navigator) {
// //   window.addEventListener('load', () => {
// //     navigator.serviceWorker.register('/service-worker.js')
// //       .then(reg => console.log('Service Worker registered:', reg))
// //       .catch(err => console.log('Service Worker registration failed:', err));
// //   });
// // }
// // let deferredPrompt;

// // window.addEventListener('beforeinstallprompt', (e) => {
// //   e.preventDefault(); // stop auto popup
// //   deferredPrompt = e;

// //   // Show your custom install button
// //   const installBtn = document.getElementById('installBtn');
// //   installBtn.style.display = 'block';

// //   installBtn.addEventListener('click', () => {
// //     installBtn.style.display = 'none';
// //     deferredPrompt.prompt();

// //     deferredPrompt.userChoice.then((choiceResult) => {
// //       if (choiceResult.outcome === 'accepted') {
// //         console.log('User accepted install');
// //       } else {
// //         console.log('User dismissed install');
// //       }
// //       deferredPrompt = null;
// //     });
// //   });
// // });



// // // PWA Service Worker Registration
// // if ('serviceWorker' in navigator) {
// //     window.addEventListener('load', () => {
// //         navigator.serviceWorker.register('/service-worker.js')
// //             .then((registration) => {
// //                 console.log('SW registered: ', registration);
// //             })
// //             .catch((registrationError) => {
// //                 console.log('SW registration failed: ', registrationError);
// //             });
// //     });
// // }

// // // PWA Install Prompt
// // let deferredPrompt;

// // window.addEventListener('beforeinstallprompt', (e) => {
// //     // Prevent Chrome 67 and earlier from automatically showing the prompt
// //     e.preventDefault();
// //     // Stash the event so it can be triggered later
// //     deferredPrompt = e;
    
// //     // Show install button or banner
// //     showInstallPromotion();
// // });

// // function showInstallPromotion() {
// //     // Create install button if it doesn't exist
// //     if (!document.getElementById('install-button')) {
// //         const installButton = document.createElement('button');
// //         installButton.id = 'install-button';
// //         installButton.textContent = 'Install App';
// //         installButton.style.cssText = `
// //             position: fixed;
// //             bottom: 20px;
// //             right: 20px;
// //             background: var(--first-color);
// //             color: white;
// //             border: none;
// //             padding: 12px 24px;
// //             border-radius: 25px;
// //             cursor: pointer;
// //             font-weight: 600;
// //             box-shadow: 0 4px 12px rgba(0,0,0,0.15);
// //             z-index: 1000;
// //             transition: transform 0.2s ease;
// //         `;
        
// //         installButton.addEventListener('mouseenter', () => {
// //             installButton.style.transform = 'scale(1.05)';
// //         });
        
// //         installButton.addEventListener('mouseleave', () => {
// //             installButton.style.transform = 'scale(1)';
// //         });
        
// //         installButton.addEventListener('click', async () => {
// //             if (deferredPrompt) {
// //                 // Show the install prompt
// //                 deferredPrompt.prompt();
// //                 // Wait for the user to respond to the prompt
// //                 const { outcome } = await deferredPrompt.userChoice;
// //                 console.log(`User response to the install prompt: ${outcome}`);
// //                 // Clear the deferredPrompt variable
// //                 deferredPrompt = null;
// //                 // Hide the install button
// //                 installButton.remove();
// //             }
// //         });
        
// //         document.body.appendChild(installButton);
// //     }
// // }

// // // Handle successful installation
// // window.addEventListener('appinstalled', (evt) => {
// //     console.log('Portfolio PWA was installed');
// //     // Hide install button if it exists
// //     const installButton = document.getElementById('install-button');
// //     if (installButton) {
// //         installButton.remove();
// //     }
// // });

// // // Handle online/offline status
// // window.addEventListener('online', () => {
// //     console.log('Back online');
// //     // You can show a notification here
// // });

// // window.addEventListener('offline', () => {
// //     console.log('Gone offline');
// //     // You can show an offline notification here
// // });


// // script.js

// // Register service worker (use relative path so it works for GitHub Pages project sites)
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', async () => {
//     try {
//       const reg = await navigator.serviceWorker.register('./service-worker.js');
//       console.log('SW registered:', reg);
//     } catch (err) {
//       console.error('SW registration failed:', err);
//       // helpful hint
//       if (err && String(err).includes('404')) {
//         console.warn('service-worker.js not found (404). Make sure service-worker.js is at the same level as index.html and registration uses "./service-worker.js" for project pages.');
//       }
//     }
//   });
// }

// // PWA Install Prompt handling
// let deferredPrompt = null;

// window.addEventListener('beforeinstallprompt', (e) => {
//   // Prevent the automatic mini-infobar on mobile
//   e.preventDefault();
//   deferredPrompt = e;
//   // show custom install UI
//   showInstallPromotion();
// });

// function showInstallPromotion() {
//   // if button already added, do nothing
//   if (document.getElementById('install-button')) return;

//   const installButton = document.createElement('button');
//   installButton.id = 'install-button';
//   installButton.innerText = 'Install App';

//   // Use proper CSS string
//   installButton.style.cssText = `
//     position: fixed;
//     bottom: 20px;
//     right: 20px;
//     background: #14FFF6;
//     color: #000;
//     border: none;
//     padding: 12px 24px;
//     border-radius: 25px;
//     cursor: pointer;
//     font-weight: 600;
//     box-shadow: 0 4px 12px rgba(0,0,0,0.15);
//     z-index: 10000;
//     transition: transform 0.2s ease;
//   `;

//   installButton.addEventListener('mouseenter', () => {
//     installButton.style.transform = 'scale(1.05)';
//   });

//   installButton.addEventListener('mouseleave', () => {
//     installButton.style.transform = 'scale(1)';
//   });

//   installButton.addEventListener('click', async () => {
//     if (!deferredPrompt) return;
//     // disable UI while showing prompt
//     installButton.disabled = true;

//     try {
//       deferredPrompt.prompt();
//       const choice = await deferredPrompt.userChoice;
//       console.log(`User response to the install prompt: ${choice.outcome}`);
//       // handle choice if needed
//       if (choice.outcome === 'accepted') {
//         console.log('User accepted the A2HS prompt');
//       } else {
//         console.log('User dismissed the A2HS prompt');
//       }
//     } catch (err) {
//       console.error('Error while prompting install:', err);
//     } finally {
//       // clear the saved event & remove button
//       deferredPrompt = null;
//       installButton.remove();
//     }
//   });

//   document.body.appendChild(installButton);
// }

// // When the app is installed (native event)
// window.addEventListener('appinstalled', (evt) => {
//   console.log('PWA was installed');
//   deferredPrompt = null;
//   const btn = document.getElementById('install-button');
//   if (btn) btn.remove();
// });

// // Online/offline handlers (optional)
// window.addEventListener('online', () => console.log('Back online'));
// window.addEventListener('offline', () => console.log('Gone offline'));


/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

function submitForm() {
    document.getElementById('contactForm').reset();
    alert("Thank you for contacting!");
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')
const scrollActive = () =>{
    const scrollDown = window.scrollY
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        if(sectionsClass){
            if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                sectionsClass.classList.add('active-link')
            }else{
                sectionsClass.classList.remove('active-link')
            }
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
});
sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text,.bd-work, .skills__img,.resume__content',{delay: 400}); 
sr.reveal('.home__social-icon,.resume__container',{ interval: 200}); 
sr.reveal('.skills__data, .work__img,.work__container,.contact_email,.contact_phone',{interval: 200}); 

// Register service worker (use relative path for project pages)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const reg = await navigator.serviceWorker.register('./service-worker.js');
      console.log('SW registered:', reg);
    } catch (err) {
      console.error('SW registration failed:', err);
      if (err && String(err).includes('404')) {
        console.warn('service-worker.js not found (404). Make sure service-worker.js is at the same level as index.html and registration uses "./service-worker.js" for project pages.');
      }
    }
  });
}

// PWA Install Prompt handling
let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  showInstallPromotion();
});

function showInstallPromotion() {
  if (document.getElementById('install-button')) return;

  const installButton = document.createElement('button');
  installButton.id = 'install-button';
  installButton.innerText = 'Install App';
  installButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #14FFF6;
    color: #000;
    border: none;
    padding: 12px 24px;
    border-radius: 25px;
    cursor: pointer;
    font-weight: 600;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 10000;
    transition: transform 0.2s ease;
  `;

  installButton.addEventListener('mouseenter', () => {
    installButton.style.transform = 'scale(1.05)';
  });

  installButton.addEventListener('mouseleave', () => {
    installButton.style.transform = 'scale(1)';
  });

  installButton.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    installButton.disabled = true;
    try {
      deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      console.log(`User response to the install prompt: ${choice.outcome}`);
    } catch (err) {
      console.error('Error while prompting install:', err);
    } finally {
      deferredPrompt = null;
      installButton.remove();
    }
  });

  document.body.appendChild(installButton);
}

// When the app is installed (native event)
window.addEventListener('appinstalled', () => {
  console.log('PWA was installed');
  deferredPrompt = null;
  const btn = document.getElementById('install-button');
  if (btn) btn.remove();
});

// Online/offline handlers (optional)
window.addEventListener('online', () => console.log('Back online'));
window.addEventListener('offline', () => console.log('Gone offline'));