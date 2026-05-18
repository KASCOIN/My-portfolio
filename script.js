// SPA Navigation
function navigateTo(page) {
  // Hide all pages
  const pages = document.querySelectorAll('.page');
  pages.forEach(p => p.classList.remove('active'));
  
  // Show the selected page
  const selectedPage = document.getElementById(page);
  if (selectedPage) {
    selectedPage.classList.add('active');
  }
  
  // Update active nav link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    if (link.dataset.page === page) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
  
  // Scroll to top
  window.scrollTo(0, 0);
}

// GIS Modal Functions
function openGISModal() {
  const modal = document.getElementById('gisModal');
  const backdrop = document.getElementById('gisModalBackdrop');
  modal.classList.add('show');
  backdrop.classList.add('show');
  document.body.style.overflow = 'hidden'; // Prevent body scroll
}

function closeGISModal() {
  const modal = document.getElementById('gisModal');
  const backdrop = document.getElementById('gisModalBackdrop');
  modal.classList.remove('show');
  backdrop.classList.remove('show');
  document.body.style.overflow = 'auto'; // Re-enable body scroll
}

// Close modal when pressing Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeGISModal();
  }
});

// Setup navigation listeners
document.addEventListener('DOMContentLoaded', function() {
  try {
    // Setup nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const page = this.dataset.page;
        navigateTo(page);
      });
    });

    // Set current year
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }

    // Image fallback
    const img = document.querySelector('.profile-img');
    if (img) {
      img.onerror = function() {
        this.src = 'https://via.placeholder.com/280x280?text=Profile+Image';
      };
    }
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

// Observe all animated elements
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.portfolio-card').forEach(card => {
    card.classList.add('animate-on-scroll', 'slide-from-right');
    observer.observe(card);
  });

  document.querySelectorAll('.skill-category').forEach(skill => {
    skill.classList.add('animate-on-scroll', 'slide-from-left');
    observer.observe(skill);
  });

  document.querySelectorAll('.stat-box').forEach(box => {
    box.classList.add('animate-on-scroll', 'slide-from-left');
    observer.observe(box);
  });
});