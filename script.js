const backgrounds = document.querySelectorAll('.background');

const logos = document.querySelectorAll(
'.logo-desktop, .logo-mobile'
);

const emails = document.querySelectorAll(
'.email-desktop, .email-mobile'
);

let logoOpacity = 0;
let emailOpacity = 0;

let logoScale = 1.15;
let emailScale = 1.12;

let frameCount = 0;

backgrounds.forEach(bg => {
    bg.style.opacity = "0";
});

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

let currentScale = 1.12;
let currentOpacity = 0;

function animate() {

    frameCount++;

    logoScale += (1 - logoScale) * 0.03;
    emailScale += (1 - emailScale) * 0.03;
    
    currentScale += (1.08 - currentScale) * 0.01;
    currentOpacity += (1 - currentOpacity) * 0.01;

    if(frameCount > 40){
    logoOpacity += (1 - logoOpacity) * 0.02;
}

if(frameCount > 80){
    emailOpacity += (1 - emailOpacity) * 0.02;

}

    currentX += (targetX - currentX) * 0.03;
    currentY += (targetY - currentY) * 0.03;

    backgrounds.forEach(bg => {

        bg.style.transform =
            `translate3d(${currentX}px, ${currentY}px, 0) scale(${currentScale})`;

        bg.style.opacity = currentOpacity;

    });

   logos.forEach(logo => {

    logo.style.opacity = logoOpacity;

    logo.style.transform =
        `scale(${logoScale})`;

});

emails.forEach(email => {

    email.style.opacity = emailOpacity;

    email.style.transform =
        `scale(${emailScale})`;

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
