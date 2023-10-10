var tl = gsap.timeline();

tl.from(".st",{
    stagger: 0.2,
    x: 30,
    duration: 1,
    opacity: 0,
    ease: 'Expo.easeInOut'
}) 
.from("#main h1", {
    y: 30,
    duration: 1,
    opacity: 0,
    ease: 'expo.easeInOut'
}, '-= 1')