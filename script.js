// Preloader
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 1500);
});

// Mobile menu toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const backToTop = document.querySelector('.back-to-top');
    
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Show back to top button
    if (window.scrollY > 500) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Back to top functionality
document.querySelector('.back-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple form validation
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Simulate form submission
    const submitBtn = this.querySelector('button');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1500);
});

// Newsletter subscription
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.querySelector('input[type="email"]').value;
    
    if (!email) {
        alert('Please enter your email address.');
        return;
    }
    
    // Simulate subscription
    const submitBtn = this.querySelector('button');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Subscribing...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Thank you for subscribing to our newsletter!');
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1500);
});

// Team section scroll functionality
const scrollContainer = document.querySelector('.scrollable-team');
const scrollLeftBtn = document.querySelector('.scroll-btn.left');
const scrollRightBtn = document.querySelector('.scroll-btn.right');

scrollLeftBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
});

scrollRightBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
});

// Hide scroll buttons when at the edges
const checkScrollButtons = () => {
    if (scrollContainer.scrollLeft <= 10) {
        scrollLeftBtn.style.opacity = '0.5';
        scrollLeftBtn.style.cursor = 'default';
    } else {
        scrollLeftBtn.style.opacity = '1';
        scrollLeftBtn.style.cursor = 'pointer';
    }
    
    if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth - 10) {
        scrollRightBtn.style.opacity = '0.5';
        scrollRightBtn.style.cursor = 'default';
    } else {
        scrollRightBtn.style.opacity = '1';
        scrollRightBtn.style.cursor = 'pointer';
    }
};

scrollContainer.addEventListener('scroll', checkScrollButtons);
window.addEventListener('resize', checkScrollButtons);
checkScrollButtons(); // Initial check

// Simple particles effect (fallback if particles.js not available)
function createParticles() {
    const container = document.getElementById('particles-js');
    if (!container) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background-color: rgba(106, 17, 203, 0.5);
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: floatParticle ${10 + Math.random() * 20}s linear infinite;
        `;
        
        container.appendChild(particle);
    }
    
    // Add CSS for particle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatParticle {
            0% {
                transform: translateY(0) translateX(0);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize particles
createParticles();

// Scroll animations for sections
function checkScroll() {
    const elements = document.querySelectorAll('.section-title, .event-card, .team-member, .project-card, .feature');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate');
        }
    });
}

// Add animation classes on scroll
window.addEventListener('scroll', checkScroll);

// Initial check
checkScroll();

// Event card registration functionality
document.querySelectorAll('.event-card .btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const eventName = this.closest('.event-card').querySelector('h3').textContent;
        alert(`Thank you for your interest in ${eventName}! Registration details will be sent to your email.`);
    });
});

// Project card view functionality
document.querySelectorAll('.project-card .btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const projectName = this.closest('.project-card').querySelector('h3').textContent;
        alert(`Redirecting to ${projectName} details page...`);
        // In a real implementation, this would redirect to the project page
    });
});

// Social media links functionality
document.querySelectorAll('.member-social a, .social-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const platform = this.querySelector('i').className.split(' ')[1];
        alert(`Redirecting to our ${platform} page...`);
        // In a real implementation, this would redirect to the actual social media page
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});