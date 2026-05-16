/**
 * 404 Page Logic - Project Ello
 * Handles interactive effects and navigation for the error page.
 */

document.addEventListener('DOMContentLoaded', () => {
    const errorCode = document.querySelector('.error-code');
    const returnBtn = document.getElementById('backToSanctuary');

    // Parallax effect: Make the 404 number float away from the cursor
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 30;
        const y = (window.innerHeight / 2 - e.pageY) / 30;
        
        errorCode.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });

    // Navigation handling
    returnBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});