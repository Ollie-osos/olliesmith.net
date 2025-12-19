
document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.getElementById('burgerMenu');
    const mobileNav = document.getElementById('mobileNav');
    const overlay = document.getElementById('overlay');
    const mobileLinks = document.querySelectorAll('.mobile-nav a');

    // Toggle mobile menu
    function toggleMenu() {
        burgerMenu.classList.toggle('active');
        mobileNav.classList.toggle('active');
        overlay.classList.toggle('active');
    }

    burgerMenu.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', function () {
            toggleMenu();
        });
    });

    // Smooth scroll for desktop nav
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 90;
                const elementPosition = target.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Work Grid Functionality
    const workItems = document.querySelectorAll('.work-item');
    const workGrid = document.getElementById('workGrid');

    workItems.forEach(item => {
        const card = item.querySelector('.work-card');
        const closeBtn = item.querySelector('.close-btn');

        // Open work details
        card.addEventListener('click', function () {
            // If this item is already expanded, do nothing
            if (item.classList.contains('expanded')) {
                return;
            }

            // Close all other expanded items
            workItems.forEach(otherItem => {
                otherItem.classList.remove('expanded');
                otherItem.style.flexBasis = '';
                otherItem.style.maxWidth = '';
            });

            // Expand this item to full width
            item.classList.add('expanded');
            item.style.flexBasis = '100%';
            item.style.maxWidth = '100%';

            // Smooth scroll to the top of the work section
            setTimeout(() => {
                const workSection = document.getElementById('work');
                const headerOffset = 90;
                const elementPosition = workSection.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }, 100);
        });

        // Close work details
        closeBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            item.classList.remove('expanded');
            item.style.flexBasis = '';
            item.style.maxWidth = '';
        });
    });
});