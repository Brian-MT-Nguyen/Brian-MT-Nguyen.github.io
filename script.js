const scrollingNavbar = document.querySelector('.scrolling-navbar');
const navbar = document.querySelector('.navbar');

// Calculate the height of the current navbar and scrolling navbar
const navbarHeight = navbar.offsetHeight;
const scrollingNavbarHeight = scrollingNavbar.offsetHeight;

// Function to handle the scroll event
function handleScroll() {
    if (window.scrollY >= navbarHeight) {
        scrollingNavbar.classList.add('sticky');
    } else {
        scrollingNavbar.classList.remove('sticky');
    }
}

// Attach the handleScroll function to the scroll event
window.addEventListener('scroll', handleScroll);

// Smooth scrolling for anchor links within the scrolling navbar
const scrollLinks = document.querySelectorAll('.scrolling-navbar a[href^="#"]');
scrollLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const target = document.querySelector(link.getAttribute('href'));
        const targetPosition = target.getBoundingClientRect().top + window.scrollY;
        const offset = navbarHeight + scrollingNavbarHeight; // Adjusted for the height of both navbars

        window.scrollTo({
            top: targetPosition - offset,
            behavior: 'smooth'
        });
    });
});
