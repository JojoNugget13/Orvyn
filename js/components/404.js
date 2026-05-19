/**
 * 404 Page Logic - Project Ello
 * Handles interactive effects and navigation for the error page.
 */

document.addEventListener('DOMContentLoaded', () => {
    const errorCode = document.querySelector('.error-code');
    const returnBtn = document.getElementById('backToSanctuary');

    // Navigation handling: Return to the page that led here
    if (returnBtn) {
        returnBtn.addEventListener('click', () => {
            history.back();
        });
    }
});