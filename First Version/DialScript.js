const slider1 = document.getElementById('slider1');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const sky = document.getElementById('sky');


const updateValue = () => {
    updateSunPosition();
    updateMoonPosition();
    updateSkyColor();
}

const updateSunPosition = () => {
    const angle = ((slider1.value / slider1.max) * 2 * Math.PI - Math.PI * 2) + Math.PI;
    const centerXArch = 200;
    const centerYArch = 160;
    const radiusXArch = 230;
    const radiusYArch = 130;
    const xPos = centerXArch + radiusXArch * Math.sin(angle);
    const yPos = centerYArch - radiusYArch * Math.cos(angle);

    sun.setAttribute("cx", xPos);
    sun.setAttribute("cy", yPos);
}

const updateMoonPosition = () => {
    const angle = (slider1.value / slider1.max) * 2 * Math.PI - Math.PI * 2;
    const centerXArch = 200;
    const centerYArch = 160;
    const radiusXArch = 230;
    const radiusYArch = 130;
    const xPos = centerXArch + radiusXArch * Math.sin(angle);
    const yPos = centerYArch - radiusYArch * Math.cos(angle);

    moon.setAttribute("transform", `translate(${xPos - moon.getBBox().x - moon.getBBox().width / 2}, ${yPos - moon.getBBox().y - moon.getBBox().height / 2})`);
}

const updateSkyColor=()=>{
    const colors = {
        night: {r: 0, g: 0, b: 139},
        morning: {r: 135, g: 206, b: 250},
        midday: {r: 135, g: 206, b: 235},
        evening: {r: 135, g: 206, b: 250},
    };

    // Map the slider value to a specific time of day
    const maxVal = slider1.max;
    const val = slider1.value;
    let color;

    if (val < maxVal * 0.25) { // Night to Morning
        color = interpolateColor(colors.night, colors.morning, val / (maxVal * 0.25));
    } else if (val < maxVal * 0.5) { // Morning to Midday
        color = interpolateColor(colors.morning, colors.midday, (val - maxVal * 0.25) / (maxVal * 0.25));
    } else if (val < maxVal * 0.75) { // Midday to Evening
        color = interpolateColor(colors.midday, colors.evening, (val - maxVal * 0.5) / (maxVal * 0.25));
    } else { // Evening to Late Evening
        color = interpolateColor(colors.evening, colors.night, (val - maxVal * 0.75) / (maxVal * 0.25));
    }

    const rgbColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
    sky.setAttribute('fill', rgbColor);
};

function interpolateColor(color1, color2, factor) {
    return {
        r: Math.round(color1.r + (color2.r - color1.r) * factor),
        g: Math.round(color1.g + (color2.g - color1.g) * factor),
        b: Math.round(color1.b + (color2.b - color1.b) * factor)
    };
}

slider1.value = 8;

slider1.addEventListener("input",updateValue);

updateValue();
