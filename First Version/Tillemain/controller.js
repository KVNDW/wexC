import { planerProjector } from './PlanerProjector.js';


const plus = document.getElementById('plus-button');
const planerContainer = document.getElementById('planer-container');



const updateValues = () => {

    const planerComponent = planerProjector();
    planerContainer.appendChild(planerComponent);

    const slider = planerComponent.querySelector('.slider1');
    const display = planerComponent.querySelector('.display1');

    slider.oninput = () => {
        display.textContent = slider.value;
    };

}


plus.addEventListener("click",updateValues);