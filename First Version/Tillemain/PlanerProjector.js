export {planerProjector}

const planerProjector = yay =>{

    const tile = document.createElement('tile-container');
    tile.className = 'tile-class'

    const title = document.createElement('h1');
    title.textContent = 'Time Dial';
    tile.appendChild(title);

    const description = document.createElement('h2');
    description.textContent = 'Use the Dial to Plan your meeting';
    tile.appendChild(description);

    const slider = document.createElement('input');
    slider.type = 'range';
    slider.className = 'slider1';
    slider.min = '0';
    slider.max = '24';
    slider.value = '8';
    tile.appendChild(slider);

    const display = document.createElement('p');
    display.className = 'display1';
    display.textContent = '8';
    tile.appendChild(display);


    return tile;

}