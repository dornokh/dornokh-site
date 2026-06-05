const backgrounds = document.querySelectorAll('.background');

let targetX = 0;
let targetY = 0;

let currentX = 0;
let currentY = 0;

function animate() {

    currentX += (targetX - currentX) * 0.06;
    currentY += (targetY - currentY) * 0.06;

    backgrounds.forEach(bg => {
        bg.style.transform =
            `translate(${currentX}px, ${currentY}px)`;
    });

    requestAnimationFrame(animate);
}

animate();

document.addEventListener('mousemove', (e) => {

    targetX =
        (e.clientX / window.innerWidth - 0.5) * 20;

    targetY =
        (e.clientY / window.innerHeight - 0.5) * 20;

});

document.addEventListener('touchmove', (e) => {

    const touch = e.touches[0];

    targetX =
        (touch.clientX / window.innerWidth - 0.5) * 16;

    targetY =
        (touch.clientY / window.innerHeight - 0.5) * 16;

}, { passive: true });

if (window.DeviceOrientationEvent) {

    window.addEventListener('deviceorientation', (event) => {

        const gamma = event.gamma || 0;
        const beta = event.beta || 0;

        targetX = gamma * 0.8;
        targetY = beta * 0.4;

    });

}
