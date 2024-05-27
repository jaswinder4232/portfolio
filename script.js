function isLaptopScreen() {
    const minWidthForLaptop = 1024;
    return window.innerWidth >= minWidthForLaptop;
}
var animationn;
if (isLaptopScreen()) {
    animationn = gsap.timeline();
}
animationn.from("#nav-bar h1", {
    y: -30,
    opacity: 0,
    duration: 1,
    stagger: 0.3,

})
function isLaptopScreenn() {
    const minWidthForLaptop = 1024;
    return window.innerWidth >= minWidthForLaptop;
}
var anima;
if (isLaptopScreenn()) {
    anima = gsap.timeline();
}
anima.from("#leftt", {
    y: 30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3,
    scale: 2

})
anima.from("#rightt h1,p,.contacts", {
    y: 30,
    opacity: 0,
    duration: 0.2,
    delay: 0.1,
    stagger: 0.3,
})
anima.from("#skiills #myy", {
    x: 370,
    rotate: 180,
    opacity: 0,
    duration: 0.2,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#skiills #myy",
        scroller: "body",
        start: "top 80%",
        end: "top 60%",
        scrub: 2
    }
})
anima.from("#skiills #skull", {
    x: -370,
    rotate: 180,
    opacity: 0,
    duration: 0.2,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#skiills #skull",
        scroller: "body",
        start: "top 80%",
        end: "top 60%",
        scrub: 2
    }
})
anima.from("#imaag div", {
    y: 30,
    opacity: 0,
    duration: 0.2,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#imaag div img",
        scroller: "body",
        start: "top 80%",
        end: "top 70%",
        scrub: 2
    }
})
anima.from("#about #abutt", {
    x: -150,
    opacity: 0,
    duration: 0.2,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#about #abutt",
        scroller: "body",
        start: "top 70%",
        end: "top 80%",
        scrub: 2
    }
})
anima.from("#about #meee", {
    x: 150,
    opacity: 0,
    duration: 0.2,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#about #meee",
        scroller: "body",
        start: "top 70%",
        end: "top 80%",
        scrub: 2
    }
})
animationn.from("#about .about-me-peragraph", {
    y: 30,
    opacity: 0,
    duration: 0.2,
    scrollTrigger: {
        trigger: "#about .about-me-peragraph",
        scroller: "body",
        start: "top 80%",
        end: "top 80%",
        scrub: 2
    }
})
animationn.from("#contact #left-footer", {
    x: -30,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: "#contact #left-footer",
        scroller: "body",
        start: "top 90%",
        end: "top 100%",
        scrub: 2
    }
})
animationn.from("#contact #right-footer", {
    x: 30,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: "#contact #right-footer",
        scroller: "body",
        start: "top 100%",
        end: "top 80%",
        scrub: 2
    }
})

function scrollToTop() {
    window.scrollTo(0, 0);
}

// Add an event listener for the window load event
window.addEventListener('load', scrollToTop);

// navbar
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}