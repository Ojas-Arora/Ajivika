gsap.from(".logo", {
    opacity: 0,
    y: -30,
    delay: 0.5,
    duration: 1
})

const tl = gsap.timeline();
tl.from(".nav-links li", {
    delay: 1,
    opacity: 0,
    stagger: 0.25,
    duration: 1,
    y: -30
})

// Cursor Logic
const cursor = document.querySelector("#cursor");
const body = document.querySelector("body")

if (cursor) {
    body.addEventListener("mousemove", function (e) {
        gsap.to(cursor, {
            x: e.x,
            y: e.y,
            duration: 0.5,
            ease: "power2.out"
        })
    })
}

// Scroll Animations for Option Cards
gsap.from(".options-container .option-card", {
    scale: 0.8, /* Less aggressive scale */
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".options-container",
        scroller: "body",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
    }
})