export {planerProjector}

const planerProjector = yay => {
    const svgs = 'http://www.w3.org/2000/svg';
    const tile = document.createElement('tile-container');
    tile.className = 'tile-class'


    const skyBox = document.createElement('div');
    skyBox.className = 'sky-Box'

    tile.appendChild(skyBox);

    // SVG container within the sky box
    const svgContainer = document.createElementNS( svgs,'svg');
    svgContainer.setAttribute('height', '100%');
    svgContainer.setAttribute('width', '100%');
    skyBox.appendChild(svgContainer);

    // Sky
    const sky = document.createElementNS( svgs,'rect');
    sky.setAttribute('x', '0');
    sky.setAttribute('y', '0');
    sky.setAttribute('width', '100%');
    sky.setAttribute('height', '100%');
    sky.setAttribute('fill', 'blue');
    svgContainer.appendChild(sky);

    // Sun
    const sun = document.createElementNS( svgs,'circle');
    sun.setAttribute('cx', '50%');
    sun.setAttribute('cy', '25');
    sun.setAttribute('r', '25');
    sun.setAttribute('stroke', 'black');
    sun.setAttribute('stroke-width', '3');
    sun.setAttribute('class', 'sun');
    svgContainer.appendChild(sun);

    // Moon
    const moon = document.createElementNS( svgs,'circle');
    moon.setAttribute('cx', '45%'); // Example position
    moon.setAttribute('cy', '50'); // Example position
    moon.setAttribute('r', '10');
    moon.setAttribute('stroke', 'black');
    moon.setAttribute('stroke-width', '2');
    moon.setAttribute('fill', 'white');
    moon.setAttribute('class', 'moon' )
    svgContainer.appendChild(moon);






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