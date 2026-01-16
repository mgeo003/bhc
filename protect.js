// Simple password protection for all pages
// Add this script to pages that need protection

(function() {
    // Check if user is authenticated
    if (sessionStorage.getItem('bhc_authenticated') !== 'true') {
        // If not on login page, redirect to login
        if (window.location.pathname !== '/login.html' && 
            !window.location.pathname.endsWith('login.html') &&
            window.location.pathname !== '/' &&
            !window.location.pathname.endsWith('index.html')) {
            window.location.href = 'login.html';
        }
    }
})();
