document.addEventListener('DOMContentLoaded', function() {
    // Get all necessary elements
    const hamburger = document.querySelector('.hamburger');
    const navigationMenu = document.querySelector('.navigation-menu');
    const navbar = document.querySelector('.navbar');
    const servicesButton = document.querySelector('.services-button');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Function to check if we're on mobile
    const isMobile = () => window.innerWidth <= 767;

    // Initially hide/show hamburger based on screen size
    hamburger.style.display = isMobile() ? 'block' : 'none';

    // Hamburger menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', function(e) {
            e.preventDefault();
            if (isMobile()) {
                this.classList.toggle('open');
                navigationMenu.classList.toggle('active');
                document.body.classList.toggle('overflow');
            }
        });
    }

    // Handle window resize
    window.addEventListener('resize', function() {
        // Show/hide hamburger based on screen size
        hamburger.style.display = isMobile() ? 'block' : 'none';
        
        // Reset mobile menu state on desktop
        if (!isMobile()) {
            navigationMenu.classList.remove('active');
            hamburger.classList.remove('open');
            document.body.classList.remove('overflow');
        }
    });

    // Close menu when clicking menu items on mobile
    const menuItems = document.querySelectorAll('.navigation-menu .menu a');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            if (isMobile()) {
                navigationMenu.classList.remove('active');
                hamburger.classList.remove('open');
                document.body.classList.remove('overflow');
            }
        });
    });

    // Services dropdown functionality (for both mobile and desktop)
    if (servicesButton) {
        if (isMobile()) {
            servicesButton.addEventListener('click', function(e) {
                e.preventDefault();
                dropdownContent.classList.toggle('show');
            });
        } else {
            servicesButton.addEventListener('mouseenter', function() {
                dropdownContent.style.display = 'block';
            });
            servicesButton.addEventListener('mouseleave', function() {
                dropdownContent.style.display = 'none';
            });
        }
    }

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.services-button')) {
            dropdownContent.classList.remove('show');
        }
    });
});