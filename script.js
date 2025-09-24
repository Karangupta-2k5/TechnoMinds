// Mobile menu toggle
document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("active");
});

// Close menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        document.querySelector(".nav-links").classList.remove("active");
    });
});

// Header scroll effect
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Active navigation link highlighting
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === current) {
            link.classList.add("active");
        }
    });
});

// Form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    this.reset();
});

// Newsletter subscription
document.querySelector(".newsletter-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for subscribing to our newsletter!");
    this.reset();
});

// Initialize particles.js
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#00f2fe" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#6a11cb",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true,
        },
    },
    retina_detect: true,
});

// Scroll functionality for team section
const scrollContainer = document.querySelector(".scrollable-team");
const scrollLeftBtn = document.querySelector(".scroll-btn.left");
const scrollRightBtn = document.querySelector(".scroll-btn.right");

scrollLeftBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({
        left: -300,
        behavior: "smooth",
    });
});

scrollRightBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({
        left: 300,
        behavior: "smooth",
    });
});

// Hide scroll buttons when at the edges
const checkScrollButtons = () => {
    if (scrollContainer.scrollLeft <= 10) {
        scrollLeftBtn.style.opacity = "0.5";
        scrollLeftBtn.style.cursor = "default";
    } else {
        scrollLeftBtn.style.opacity = "1";
        scrollLeftBtn.style.cursor = "pointer";
    }

    if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth - 10
    ) {
        scrollRightBtn.style.opacity = "0.5";
        scrollRightBtn.style.cursor = "default";
    } else {
        scrollRightBtn.style.opacity = "1";
        scrollRightBtn.style.cursor = "pointer";
    }
};

scrollContainer.addEventListener("scroll", checkScrollButtons);
window.addEventListener("resize", checkScrollButtons);
checkScrollButtons(); // Initial check