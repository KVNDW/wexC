const slider1 = document.getElementById('slider1');
const display1 = document.getElementById('display1');



const updateValue = () => {
    display1.textContent = slider1.value;

}



slider1.addEventListener("input",updateValue);
