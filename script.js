gsap.from("#navbar",{
    y:-100,
    duration:1,
    delay:0.5,
    opacity:0
})

gsap.from("#rightcontainer img",{
    x:100,
    duration:1,
    delay:0.5,
    opacity:0
})

gsap.from("#leftcontainer h2,p,button",{
    x:-100,
    duration:1,
    delay:0.5,
    opacity:0,
    stegger:0.2,
    scrub:0.3   
})