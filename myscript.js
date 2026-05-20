//Make initial 16 by 16 grid of divs
const container = document.querySelector('.container'); 
const colorOptions = [
    "#FF4136", // Red
    "#FF851B", // Orange
    "#FFDC00", // Yellow
    "#2ECC40", // Green
    "#0074D9", // Blue
    "#001F3F", // Navy
    "#7FDBFF", // Light Blue
    "#B10DC9", // Purple
    "#F012BE", // Magenta
    "#FF6EB4", // Hot Pink
    "#39CCCC", // Teal
    "#3D9970"  // Olive
];
let randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];

for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('flex-item');
    container.appendChild(div);
    const flexItems = document.querySelectorAll('.flex-item');
    flexItems.forEach(item => {

});
}

//Ask user for new grid size and remove existing grid and create new grid of divs based on that size
const button = document.querySelector('button');
button.addEventListener('click', () => {
    const newSize = prompt('Enter new grid size (max 100):');
    if (newSize > 100) {
        alert('Grid size must be less than or equal to 100.');
        return;
    }
    container.innerHTML = '';
    container.style.setProperty('--grid-size', newSize);
    for (let i = 0; i < newSize * newSize; i++) {
        const div = document.createElement('div');
        div.classList.add('flex-item');
        container.appendChild(div);
    }

});

    //Add event listener to each div that changes its background color to black when hovered over
    container.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('flex-item')) {
            e.target.style.backgroundColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
        }
});


