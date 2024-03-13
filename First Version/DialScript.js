const slider1 = document.getElementById('slider1');
const input1 = document.getElementById('input1');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const sky = document.getElementById('sky');


const updateValue = () => {
    updateSunPosition();
    updateMoonPosition();
    updateSkyColor();
}

const updateSunPosition = () => {
    const angle = (((slider1.value) / slider1.max) * Math.PI*2 - Math.PI / 2) - Math.PI / 2.2 ;
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
        color = interpolateColor(colors.night, colors.morning, factor = val / (maxVal * 0.25));
        //console.log("Night to Morning: " + color.b.toString() + ":" +color.g.toString() + ":" + color.r.toString() + " factor: " + "(" + val + " / (" + maxVal + "*0.25) = " + factor)
    } else if (val < maxVal * 0.5) { // Morning to Midday
        color = interpolateColor(colors.morning, colors.midday, (val - maxVal * 0.25) / (maxVal * 0.25));
        //console.log("Morning to Midday: " + color.b.toString() + ":" +color.g.toString() + ":" + color.r.toString() + " factor: " + "(" + val + "-" + maxVal + "* 0.25) / (" + maxVal + "*0.25) = " + factor)
    } else if (val < maxVal * 0.75) { // Midday to Evening
        color = interpolateColor(colors.midday, colors.evening, (val - maxVal * 0.5) / (maxVal * 0.25));
        //console.log("Midday to Evening: " + color.b.toString() + ":" +color.g.toString() + ":" + color.r.toString() + " factor: " + "(" + val + "-" + maxVal + "* 0.5) / (" + maxVal + "*0.25) = " + factor)
    } else { // Evening to Late Evening
        color = interpolateColor(colors.evening, colors.night, ((val - maxVal * 0.75) / (maxVal * 0.25)) || 0.04 ); //ensure minimum value 0 to make a color change happen
        //console.log("Evening to Late Evening: " + color.b.toString() + ":" +color.g.toString() + ":" + color.r.toString() + " factor: " + "(" + val + "-" + maxVal + "* 0.75) / (" + maxVal + "*0.25) = " + factor)
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

slider1.addEventListener("input",updateValue);
input1.addEventListener("input",updateValue);

updateValue();
