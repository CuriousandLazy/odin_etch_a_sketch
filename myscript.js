//Make a 16 by 16 grid of divs
const container = document.querySelector('.container'); 
for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('flex-item');
    container.appendChild(div);
}

//Add event listener to each div that changes its background color to black when hovered over
const flexItems = document.querySelectorAll('.flex-item');
flexItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = 'red';
    });
});