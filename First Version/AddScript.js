const add = document.getElementById('plus-button');


/*

const addCalendar =() => {

    console.log("hello")

    fetch('TimeDial.html')
        .then(response => response.text())
        .then(html => {
            const mainContainer = document.createElement('div');

            mainContainer.innerHTML = html;

            const scripts = mainContainer.querySelectorAll('script');
            scripts.forEach(script => {
                console.log(`Loading script: ${script.src}`);
                const loadedScript = document.createElement('script');
                loadedScript.src = script.src;
                document.body.appendChild(loadedScript);
            });


            const containerDivString = mainContainer.querySelector('.container').innerHTML;

            const containerDivHTML = document.createElement('div');
            containerDivHTML.classList.add('container');
            containerDivHTML.innerHTML = containerDivString;



            const targetContainer = document.querySelector('.add-calendar-class');
            targetContainer.appendChild(containerDivHTML);






        })

}

 */

const addCalendar =() => {

    console.log("hello")

    fetch('TimeDial.html')
        .then(response => response.text())
        .then(html => {
            const mainContainer = document.createElement('div');

            mainContainer.innerHTML = html;

            const targetContainer = document.querySelector('.add-calendar-class');
            targetContainer.appendChild(mainContainer);


            const scripts = mainContainer.querySelectorAll('script');
            scripts.forEach(script => {
                console.log(`Loading script: ${script.src}`);
                const loadedScript = document.createElement('script');
                loadedScript.src = script.src;
                document.body.appendChild(loadedScript);
            });

        })
}
add.addEventListener('click',addCalendar);




