const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

window.addEventListener('scroll', function() {
    let header = document.querySelector('.header');
    if (window.scrollY > 50) { 
        header.classList.add('scrolled'); 
    } else {
        header.classList.remove('scrolled');
    }
});

document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scroll for the arrow
document.querySelector('.scroll-down-arrow a').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});

// Form Submission and Popup Logic
const visaForm = document.getElementById('visaForm');
const popupOverlay = document.getElementById('popupOverlay');
const resultText = document.getElementById('resultText');
const closeBtn = document.querySelector('.close-btn');

visaForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Show loading animation
    popupOverlay.style.display = 'flex';
    resultText.textContent = 'Checking eligibility...';

    // Simulate API call or processing
    setTimeout(() => {
        const country = document.getElementById('country').value;
        const visaType = document.getElementById('visaType').value;

        // Display results
        resultText.textContent = `You are eligible for a ${visaType} visa to ${country.toUpperCase()}!`;
    }, 2000);
});

// Close Popup
closeBtn.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
});


// Modal Logic with Longer Animations
const visaCards = document.querySelectorAll('.visa-card');
const modalOverlay = document.getElementById('modalOverlay');
const modal = document.querySelector('.modal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const closeModal = document.querySelector('.close-modal');



// Open Modal on Card Click
visaCards.forEach(card => {
    card.addEventListener('click', () => {
        const visaType = card.getAttribute('data-visa');
        modalTitle.textContent = visaDetails[visaType].title;
        modalDescription.textContent = visaDetails[visaType].description;
        modalOverlay.style.display = 'flex';
        modal.classList.remove('closing');
    });
});

// Close Modal with Animation
closeModal.addEventListener('click', () => {
    modal.classList.add('closing');
    setTimeout(() => {
        modalOverlay.style.display = 'none';
    }, 600); // Increased duration to match animation
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modal.classList.add('closing');
        setTimeout(() => {
            modalOverlay.style.display = 'none';
        }, 600); // Increased duration to match animation
    }
});


// Carousel Logic
const carousel = document.querySelector('.carousel');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const testimonials = document.querySelectorAll('.testimonial');

let currentIndex = 0;

// Function to move carousel
const moveCarousel = (direction) => {
    const testimonialWidth = testimonials[0].offsetWidth + 32; // Width + gap
    if (direction === 'left' && currentIndex > 0) {
        currentIndex--;
    } else if (direction === 'right' && currentIndex < testimonials.length - 1) {
        currentIndex++;
    }
    carousel.scrollTo({
        left: currentIndex * testimonialWidth,
        behavior: 'smooth'
    });
};

// Auto-Scroll Carousel
let autoScroll = setInterval(() => {
    if (currentIndex < testimonials.length - 1) {
        moveCarousel('right');
    } else {
        currentIndex = 0;
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
    }
}, 5000); // Change slide every 5 seconds

// Manual Navigation
leftArrow.addEventListener('click', () => {
    clearInterval(autoScroll); // Stop auto-scroll on manual navigation
    moveCarousel('left');
});

rightArrow.addEventListener('click', () => {
    clearInterval(autoScroll); // Stop auto-scroll on manual navigation
    moveCarousel('right');
});