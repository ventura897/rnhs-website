// Get the elements
const slides = document.querySelectorAll('.slide');
const nextButton = document.querySelector('.next-button');

let currentSlide = 0;

// Function to show the next slide
function showNextSlide() {
    // Hide the current slide
    slides[currentSlide].classList.remove('active');

    // Update the current slide index
    currentSlide = (currentSlide + 1) % slides.length;

    // Show the next slide
    slides[currentSlide].classList.add('active');
}

// Add event listener to the next button
nextButton.addEventListener('click', showNextSlide);

// Show the first slide initially
slides[0].classList.add('active');