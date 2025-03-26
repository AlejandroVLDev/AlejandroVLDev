const circle = document.getElementById('circle');
const sideNavButton = document.getElementById('sideNavButton');
const crossNavButton = document.getElementById('cross');
const nav = document.getElementById('nav');
const mouse = {
    x: undefined,
    y: undefined
}

document.addEventListener('mouseover', setInitialMousePos, false);

function setInitialMousePos( event ) {
    circle.style.left = `${event.clientX}px`;
    circle.style.top = `${event.clientY}px`;
    circle.classList.add('fadeIn');
    document.removeEventListener('mouseover', setInitialMousePos, false);
}

document.addEventListener('mousemove', (event) => {
    circle.style.left = `${event.clientX}px`;
    circle.style.top = `${event.clientY}px`;
    if (mouse.x === undefined || mouse.y === undefined) {
        circle.classList.remove('fadeOut');
        circle.classList.add('fadeIn');
    }
    mouse.x = event.x;
    mouse.y = event.y;
});

window.addEventListener('mouseout', function(){
    mouse.x = undefined;
    mouse.y = undefined;
    circle.classList.add('fadeOut');
    circle.classList.remove('fadeIn');
});

sideNavButton.addEventListener('click', () => {
    nav.classList.add('open');
    nav.classList.remove('close');
});

crossNavButton.addEventListener('click', () => {
    nav.classList.remove('open');
    nav.classList.add('close');
});