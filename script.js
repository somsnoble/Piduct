// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Function to handle responsive adjustments
    function adjustLayout() {
        const width = window.innerWidth;
        const container = document.querySelector('.container');
        const barterCard = document.querySelector('.barter-card');
        const tabs = document.querySelectorAll('.tab');
        const navItems = document.querySelectorAll('.nav-item');

        // Adjust font size based on screen width
        let fontSize = width < 768 ? 14 : width < 1024 ? 16 : 18;
        document.body.style.fontSize = `${fontSize}px`;

        // Adjust container padding for larger screens
        container.style.padding = width < 768 ? '10px' : '20px';

        // Toggle card layout for desktop
        if (width >= 768) {
            barterCard.classList.add('desktop-layout');
        } else {
            barterCard.classList.remove('desktop-layout');
        }

        // Adjust tab and nav item spacing
        tabs.forEach(tab => {
            tab.style.padding = width < 768 ? '10px 15px' : '12px 25px';
        });

        navItems.forEach(item => {
            item.style.fontSize = width < 768 ? '16px' : '18px';
        });
    }

    // Run on load and resize
    adjustLayout();
    window.addEventListener('resize', adjustLayout);

    // Optional: Add swipe functionality for mobile navigation
    let touchstartX = 0;
    let touchendX = 0;
    const barterCard = document.querySelector('.barter-card');

    barterCard.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
    });

    barterCard.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const diff = touchendX - touchstartX;
        if (diff > 50) {
            // Swipe left (e.g., next barter)
            console.log('Swipe left');
            // Add logic to change barter card
        } else if (diff < -50) {
            // Swipe right (e.g., previous barter)
            console.log('Swipe right');
            // Add logic to change barter card
        }
    }
});

// Link the script in your HTML
// Add this just before the </body> tag in index.html
<script src="script.js"></script>
