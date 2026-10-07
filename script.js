
/* =========================================================
   VANTA AUTO REFINISH
   PREMIUM PANELBEATER WEBSITE
========================================================= */


/* =========================================================
   SELECT ELEMENTS
========================================================= */

const header = document.getElementById("header");

const menuBtn = document.getElementById("menuBtn");

const nav = document.getElementById("nav");

const cursorGlow =
    document.querySelector(".cursor-glow");

const hero =
    document.querySelector(".hero");

const carStage =
    document.querySelector(".car-stage");



/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});



/* =========================================================
   MOBILE MENU
========================================================= */

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("open");

});



/* Close menu after clicking a link */

document
    .querySelectorAll(".nav a")
    .forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

        });

    });



/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);



document
    .querySelectorAll(".reveal")
    .forEach(element => {

        observer.observe(element);

    });



/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav a");



window.addEventListener("scroll", () => {

    let currentSection = "home";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;


        if (window.scrollY >= sectionTop) {

            currentSection =
                section.id;

        }

    });


    navLinks.forEach(link => {

        const linkTarget =
            link.getAttribute("href");


        if (
            linkTarget ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        } else {

            link.classList.remove("active");

        }

    });

});



/* =========================================================
   MOUSE FOLLOWING GOLD GLOW
========================================================= */

window.addEventListener("mousemove", event => {

    cursorGlow.style.left =
        `${event.clientX}px`;

    cursorGlow.style.top =
        `${event.clientY}px`;

});



/* =========================================================
   3D CAR MOUSE MOVEMENT
========================================================= */

hero.addEventListener("mousemove", event => {

    /*
        Don't use the 3D mouse effect
        on smaller screens.
    */

    if (window.innerWidth < 900) {

        return;

    }


    /*
        Calculate mouse position
        relative to the screen.
    */

    const mouseX =
        event.clientX /
        window.innerWidth -
        0.5;


    const mouseY =
        event.clientY /
        window.innerHeight -
        0.5;


    /*
        Convert mouse movement
        into rotation.
    */

    const rotateY =
        -8 + mouseX * 10;


    const rotateX =
        2 - mouseY * 7;


    carStage.style.transform =
        `rotateY(${rotateY}deg)
         rotateX(${rotateX}deg)`;

});



/* =========================================================
   RESET 3D CAR POSITION
========================================================= */

hero.addEventListener("mouseleave", () => {

    carStage.style.transform =
        "rotateY(-8deg) rotateX(2deg)";

});



/* =========================================================
   CURRENT YEAR
========================================================= */

const year =
    document.getElementById("year");


year.textContent =
    new Date().getFullYear();



const vehicleImages =
    document.querySelector("#vehicleImages");

const imagePreview =
    document.querySelector("#imagePreview");


vehicleImages.addEventListener("change", function () {

    imagePreview.innerHTML = "";

    const files = Array.from(this.files);

    files.forEach(file => {

        const reader = new FileReader();

        reader.onload = function (event) {

            const img =
                document.createElement("img");

            img.src =
                event.target.result;

            imagePreview.appendChild(img);

        };

        reader.readAsDataURL(file);

    });

});    