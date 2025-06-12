// Basic JavaScript with error handling
document.addEventListener('DOMContentLoaded', function () {
    try {
        // Set current year
        document.getElementById('currentYear').textContent = new Date().getFullYear();

        // Image fallback
        const img = document.querySelector('.profile-img');
        img.onerror = function () {
            this.src = 'https://via.placeholder.com/280x280?text=Profile+Image';
        };
    } catch (error) {
        console.log('Initialization error:', error);
    }
});

// Add Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-active');
        }
    });
}, { threshold: 0.1 });

// Observe all sections that need animation
document.querySelectorAll('.content-section').forEach(section => {
    section.classList.add('animate-on-scroll', 'slide-from-right');
    observer.observe(section);
});

document.querySelectorAll('.hero-section').forEach(section => {
    section.classList.add('animate-on-scroll', 'scale-in');
    observer.observe(section);
});

document.querySelectorAll('.project-button').forEach(button => {
    button.classList.add('animate-on-scroll', 'slide-from-left');
    observer.observe(button);
});