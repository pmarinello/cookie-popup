const tl=gsap.timeline ({defaults: {duration: 1, ease: "in-out"}})

tl.fromTo ('.cookie-container', {scale: 0}, {scale:1 , duration: 0.4})
tl.fromTo ('.cookie', {opacity: 0, x: -200, rotate: -180}, {opacity: 1, x: 0, rotate: 0}, '<50%')
tl.fromTo ('.text', {opacity: 0, x: -175}, {opacity: 1, x: 0}, '<')


// cookie jump
tl.fromTo('.cookie', {y:0, rotate: 0}, {y:-25, rotate: 30, yoyo: true, ease: "in-out", repeat: 1})
tl.fromTo('#crumbs', {y:0}, {y: -10, yoyo: true, ease: "in-out", repeat: 1}, '<')


// cookie fade out
const button = document.querySelector('button');
button.addEventListener('click', () => {
    gsap.to('.cookie-container', {opacity: 0, y: 100, duration: 0.75, ease: 'power1.out'})
} )

