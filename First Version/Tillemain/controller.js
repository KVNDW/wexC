import { planerProjector } from './PlanerProjector.js';

const plus = document.getElementById('plus-button');
const planerContainer = document.getElementById('planer-container');

const updateValues = () => {

    const planerComponent = planerProjector();
    planerContainer.appendChild(planerComponent);

    const slider = planerComponent.querySelector('.slider1');
    const display = planerComponent.querySelector('.display1');
    const sun = planerComponent.querySelector('.sun');

    slider.oninput = () => {
        display.textContent = slider.value;
        updateSunPosition()
    };

    const updateSunPosition = () => {
        const angle = (((slider.value) / slider.max) * Math.PI*2 - Math.PI / 2) - Math.PI / 2.2 ;
        const centerXArch = 200;
        const centerYArch = 220;
        const radiusXArch = 180;
        const radiusYArch = 180;
        const xPos = centerXArch + radiusXArch * Math.sin(angle);
        const yPos = centerYArch - radiusYArch * Math.cos(angle);

        sun.setAttribute("cx", xPos);
        sun.setAttribute("cy", yPos);
    }
}

plus.addEventListener("click",updateValues);