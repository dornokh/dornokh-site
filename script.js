window.addEventListener('load', () => {

    setTimeout(() => {

        document.body.classList.add('loaded');

    }, 150);

});

const backgrounds = document.querySelectorAll('.background');

let targetX = 0;
let targetY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener('mousemove', (e) => {
    targetX = (e.clientX / window.innerWidth - 0.5) * 35;
    targetY = (e.clientY / window.innerHeight - 0.5) * 35;
});

document.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];

    targetX = (touch.clientX / window.innerWidth - 0.5) * 25;
    targetY = (touch.clientY / window.innerHeight - 0.5) * 25;

}, { passive: true });

function animate() {

    currentX += (targetX - currentX) * 0.03;
    currentY += (targetY - currentY) * 0.03;

    backgrounds.forEach(bg => {
        bg.style.transform =
            `translate3d(${currentX}px, ${currentY}px, 0) scale(1.08)`;
    });

    requestAnimationFrame(animate);
}

animate();

if (window.innerWidth <= 768) {

    let drift = 0;

    function mobileDrift() {

        drift += 0.003;

        targetX = Math.sin(drift) * 12;
        targetY = Math.cos(drift * 0.7) * 8;

        requestAnimationFrame(mobileDrift);
    }

    mobileDrift();
}
