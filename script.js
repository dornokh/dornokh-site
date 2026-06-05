const backgrounds = document.querySelectorAll('.background');

let targetX = 0;
let targetY = 0;

let currentX = 0;
let currentY = 0;

function animate() {

    currentX += (targetX - currentX) * 0.04;
    currentY += (targetY - currentY) * 0.04;

    backgrounds.forEach(bg => {

        bg.style.transform =
            `translate3d(${currentX}px, ${currentY}px, 0) scale(1.06)`;

    });

    requestAnimationFrame(animate);
}

animate();

document.addEventListener('mousemove', (e) => {

    targetX =
        (e.clientX / window.innerWidth - 0.5) * 30;

    targetY =
        (e.clientY / window.innerHeight - 0.5) * 30;

});

document.addEventListener('touchmove', (e) => {

    const touch = e.touches[0];

    targetX =
        (touch.clientX / window.innerWidth - 0.5) * 24;

    targetY =
        (touch.clientY / window.innerHeight - 0.5) * 24;

}, { passive: true });

if (window.DeviceOrientationEvent) {

    window.addEventListener('deviceorientation', (event) => {

        const gamma = event.gamma || 0;
        const beta = event.beta || 0;

        targetX = gamma * 1.2;
        targetY = beta * 0.8;

    });

}        const beta = event.beta || 0;

        targetX = gamma * 0.8;
        targetY = beta * 0.4;

    });

}
