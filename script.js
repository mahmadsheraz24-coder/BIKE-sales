// DOM Elements
const navbar = document.querySelector('.navbar');
const fadeElements = document.querySelectorAll('.fade-in');

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Intersection Observer for Scroll Animations
const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

// Observe elements
fadeElements.forEach(element => {
    appearOnScroll.observe(element);
});

// Trigger animations on load for elements already in viewport natively (like hero section)
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content.fade-in');
    if (heroContent) {
        setTimeout(() => {
            heroContent.classList.add('visible');
        }, 300); // slight delay for visual impact
    }
});
