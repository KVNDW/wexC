const slider1 = document.getElementById('slider1');
const display1 = document.getElementById('display1');



export const updateValues = () => {
    const slider1 = document.getElementById('slider1');
    const display1 = document.getElementById('display1');
    display1.textContent = slider1.value;

}

slider1.value = 10;

slider1.addEventListener("input",updateValues);

