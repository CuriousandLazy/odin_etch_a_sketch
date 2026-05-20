//Make initial 16 by 16 grid of divs
const container = document.querySelector('.container'); 

for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('flex-item');
    container.appendChild(div);
    const flexItems = document.querySelectorAll('.flex-item');
    flexItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = 'red';
    });
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
            e.target.style.backgroundColor = 'red';
        }
});


