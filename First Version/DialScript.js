const slider1 = document.getElementById('slider1');
const display1 = document.getElementById('display1');
const sun = document.getElementById('sun');
const sky = document.getElementById('sky');


const updateValue = () => {
    display1.textContent = slider1.value;

    updateSunPosition();
    updateSkyColor();
}

const updateSunPosition = () => {
    const angle = (slider1.value / slider1.max) * Math.PI - Math.PI / 2;
    const centerXArch = 200;
    const centerYArch = 160;
    const radiusXArch = 230;
    const radiusYArch = 130;
    const xPos = centerXArch + radiusXArch * Math.sin(angle);
    const yPos = centerYArch - radiusYArch * Math.cos(angle);

    sun.setAttribute("cx", xPos);
    sun.setAttribute("cy", yPos);
}

const updateSkyColor=()=>{
    const green = 230 - slider1.value*4;
    const red= 100-slider1.value*4;
    const blue = 255-slider1.value*2;
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;

    sky.setAttribute('fill', rgbColor);
}

slider1.value = 0;

slider1.addEventListener("input",updateValue);

updateValue();
