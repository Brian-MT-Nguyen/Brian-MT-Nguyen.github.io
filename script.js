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

        // Acquire the section to scroll to
        const target = document.querySelector(link.getAttribute('href'));

        // Calculate the section position to scroll too
        const targetPosition = target.getBoundingClientRect().top + window.scrollY;

        // subtract with offset of the header to put it on screen
        const h3Element = document.querySelector('h3');
        const h3Height = h3Element.offsetHeight;
        console.log(`Height of h3 element using offsetHeight: ${h3Height}px`);

        // also subtract with offset navbars
        let offset = navbarHeight;

        // if mobile multiply by 1.25 for line height else just add
        if (window.innerWidth <= 768) {
            offset = offset + (1.1 * scrollingNavbarHeight);
        } 
        else {
            offset = offset + scrollingNavbarHeight;
        }

        // finally scroll
        window.scrollTo({
            top: targetPosition - offset - h3Height,
            behavior: 'smooth'
        });
    });
});
