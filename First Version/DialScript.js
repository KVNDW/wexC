const input1 = document.getElementById('input1');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const sky = document.getElementById('sky');

const updateValue = () => {
    updateSunPosition();
    updateMoonPosition();
    updateSkyColor();
    updateMouth()
}

const updateMouth = ()=> {
    const mouth = document.getElementById('sheep-mouth');
    if((toSlider.value - fromSlider.value) >= 5){
        mouth.setAttribute('d', 'M18.5751 29.0968C17.7027 29.1263 16.4344 28.972 16.6544 28.4786C16.6544 27.4018 18.0949 28.4786 18.5751 28.4786C19.0552 28.4786 20.4957 27.4018 20.4957 28.4786C20.4957 28.8911 19.6065 29.062 18.5751 29.0968ZM18.5751 29.0968L18.7334 31.9444M18.7334 31.9444C18.7334 31.9444 16.5 30 14.5 32.5M18.7334 31.9444C18.7334 31.9444 21.5 30.5 22.5 32.5');
    }else{
        mouth.setAttribute('d', 'M18.8304 29.1554C17.8957 29.1848 16.5368 29.0307 16.7725 28.5378C16.7725 27.4621 18.3159 28.5378 18.8304 28.5378C19.3448 28.5378 20.8882 27.4621 20.8882 28.5378C20.8882 28.9499 19.9355 29.1206 18.8304 29.1554ZM18.8304 29.1554L19 32M19 32C19 32 16 32.5 15 30.5M19 32C19 32 21.5 32.5 22.5 30.5');
    }
}

const updateSunPosition = () => {
    const angle = (((fromSlider.value) / fromSlider.max) * Math.PI*2 - Math.PI / 2) - Math.PI / 2.2 ;
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
    const angle = (((fromSlider.value)/ fromSlider.max) * Math.PI*2 + Math.PI/2 )- Math.PI / 2.2;
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
    const maxVal = fromSlider.max;
    const val = fromSlider.value;
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

fromSlider.addEventListener("input",updateValue);
toSlider.addEventListener("input",updateValue);
input1.addEventListener("input",updateValue);

updateValue();
