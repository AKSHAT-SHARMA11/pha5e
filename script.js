document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero');
    const imageContainers = document.querySelectorAll('.image-container');

    setTimeout(() => {
        heroSection.classList.add('animated');
    }, 300); 

  
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        imageContainers.forEach(container => {
            const speedX = parseFloat(container.dataset.speedX) || 0.01;
            const speedY = parseFloat(container.dataset.speedY) || 0.01;

            const translateX = (mouseX - windowWidth / 2) * speedX;
            const translateY = (mouseY - windowHeight / 2) * speedY;

            container.style.transform = `translate(${translateX}px, ${translateY}px) scale(1)`; // Reset scale during movement
        });
    });

    heroSection.addEventListener('mouseleave', () => {
        imageContainers.forEach(container => {
            container.style.transform = `translate(0, 0) scale(1)`;
        });
    });
});