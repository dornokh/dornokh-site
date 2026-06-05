const backgrounds = document.querySelectorAll('.background');

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener('mousemove', e => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 10;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 10;
});

function animate() {

    currentX += (mouseX - currentX) * 0.02;
    currentY += (mouseY - currentY) * 0.02;

    backgrounds.forEach(bg => {
        bg.style.transform =
            `translate3d(${currentX}px, ${currentY}px, 0)`;
    });

    requestAnimationFrame(animate);
}

animate();

document.addEventListener('mousemove', (e) => {

    targetX =
    (e.clientX / window.innerWidth - 0.5) * 10;

targetY =
    (e.clientY / window.innerHeight - 0.5) * 10;

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
