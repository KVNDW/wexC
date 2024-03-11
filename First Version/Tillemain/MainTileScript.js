import {updateValue, updateValues} from '../DialScript.js';
const plusbutton = document.getElementById('plus-button');



const updateValue = () => {


    fetch('../TimeDial.html')
        .then(response => response.text())
        .then(html => {
            const container = document.getElementById('tiles-container');
            container.insertAdjacentHTML('beforeend', html);


            updateValues()
        })

}


plusbutton.addEventListener("click",updateValue);
