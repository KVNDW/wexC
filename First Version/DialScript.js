const slider1 = document.getElementById('slider1');
const display1 = document.getElementById('display1');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const sky = document.getElementById('sky');


const updateValue = () => {
    display1.textContent = slider1.value;

    updateSunPosition();
    updateMoonPosition();
    updateSkyColor();
}

const updateSunPosition = () => {
    const angle = (((slider1.value ) / slider1.max) * Math.PI*2 - Math.PI / 2) - Math.PI / 2.2 ;
    const centerXArch = 200;
    const centerYArch = 220;
    const radiusXArch = 180;
    const radiusYArch = 180;
    const xPos = centerXArch + radiusXArch * Math.sin(angle);
    const yPos = centerYArch - radiusYArch * Math.cos(angle);

    sun.setAttribute("cx", xPos);
    sun.setAttribute("cy", yPos);
}
const updateMoonPosition = () => {
    const angle = (((slider1.value)/ slider1.max) * Math.PI*2 + Math.PI/2 )- Math.PI / 2.2;
    const centerXArch = 200;
    const centerYArch = 220;
    const radiusXArch = 180;
    const radiusYArch = 180;
    const xPos = centerXArch + radiusXArch * Math.sin(angle);
    const yPos = centerYArch - radiusYArch * Math.cos(angle);

    moon.setAttribute("cx", xPos);
    moon.setAttribute("cy", yPos);
}

const updateSkyColor=()=>{
    let rgbColor;
    if ((slider1.value >= slider1.max/4.8) && (slider1.value >= slider1.max/1.5)) {
        const green = 230 - slider1.value * 4;
        const red = 100 - slider1.value * 4;
        const blue = 255 - slider1.value * 2;
        rgbColor = `rgb(${red}, ${green}, ${blue})`;
    } else {
        const green = 230 - slider1.value * 8;
        const red = 100 - slider1.value * 8;
        const blue = 255 - slider1.value * 6;
        rgbColor = `rgb(${red}, ${green}, ${blue})`;
    }

    sky.setAttribute('fill', rgbColor);
}

slider1.value = 6;

slider1.addEventListener("input",updateValue);

updateValue();
