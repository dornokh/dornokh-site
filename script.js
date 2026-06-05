const backgrounds = document.querySelectorAll('.background');

let currentX = 0;
let currentY = 0;

document.addEventListener('mousemove',(e)=>{

const x = (e.clientX / window.innerWidth - 0.5) * 16;
const y = (e.clientY / window.innerHeight - 0.5) * 16;

currentX = x;
currentY = y;

backgrounds.forEach(bg=>{
bg.style.transform = `translate(${x}px, ${y}px)`;
});

});

if (window.DeviceOrientationEvent) {

window.addEventListener('deviceorientation',(event)=>{

const x = (event.gamma || 0) * 0.4;
const y = (event.beta || 0) * 0.2;

backgrounds.forEach(bg=>{
bg.style.transform = `translate(${x}px, ${y}px)`;
});

});

}
document.addEventListener('touchmove',(e)=>{

const touch = e.touches[0];

const x = (touch.clientX / window.innerWidth - 0.5) * 12;
const y = (touch.clientY / window.innerHeight - 0.5) * 12;

backgrounds.forEach(bg=>{
bg.style.transform = `translate(${x}px, ${y}px)`;
});

});
