<!-- Loading Screen -->
document.addEventListener("DOMContentLoaded", function() {
    const loadingElement = document.getElementById('loading');
    const contentElements = document.querySelectorAll('.content');
    const bodyElement = document.body;

    // Show the loading spinner
    loadingElement.style.display = 'block';

    // Simulate data fetching with a delay (replace with your actual data fetching logic)
    fetchData().then(() => {
        // Hide the loading spinner, show content, and reset background
        loadingElement.style.display = 'none';
        bodyElement.classList.remove('loading');
        contentElements.forEach(element => element.style.display = 'block');
    }).catch((error) => {
        console.error('Error fetching data:', error);
        // Handle errors, show an error message if needed
        loadingElement.textContent = 'Failed to load data.';
    });
});

// Simulate an asynchronous data fetch
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 3000); // Simulate a 3-second data fetch
    });
}
        
<!-- Theme Switcher -->
document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('light-dark-mode');
    const themeIcon = document.getElementById('themeico');

    function applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
            document.documentElement.setAttribute('data-menu-color', 'dark');
            themeIcon.classList.remove('mdi-weather-night'); // Ensure sun icon is removed
            themeIcon.classList.add('mdi-white-balance-sunny'); // Ensure moon icon is added
        } else {
            document.documentElement.setAttribute('data-bs-theme', 'light');
            document.documentElement.setAttribute('data-menu-color', 'light');
            themeIcon.classList.remove('mdi-white-balance-sunny'); // Ensure moon icon is removed
            themeIcon.classList.add('mdi-weather-night'); // Ensure sun icon is added
        }
    }

    // Check saved theme in session storage
    const savedTheme = sessionStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);

    // Toggle theme on click
    themeSwitch.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
        sessionStorage.setItem('theme', newTheme);
    });
});
