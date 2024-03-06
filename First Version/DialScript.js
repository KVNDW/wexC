const slider1 = document.getElementById('slider1');
const display1 = document.getElementById('display1');
const sun = document.getElementById('sun');



const updateValue = () => {
    display1.textContent = slider1.value;

    const angle = (slider1.value / slider1.max) * Math.PI - Math.PI / 2;

    const centerXArch = 200;
    const centerYArch = 160;
    const radiusXArch = 200;
    const radiusYArch = 120;

    const xPos = centerXArch + radiusXArch * Math.sin(angle);
    const yPos = centerYArch - radiusYArch * Math.cos(angle);

    sun.setAttribute("cx", xPos);
    sun.setAttribute("cy", yPos);
}

slider1.value = 10;

slider1.addEventListener("input",updateValue);

updateValue();
