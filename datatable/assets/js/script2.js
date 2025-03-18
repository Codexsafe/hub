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
    document.documentElement.setAttribute('data-bs-theme', 'light');
});
